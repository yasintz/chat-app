import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import hasura from '../../clients/graphql-request';
import { environment } from '../../environments/environment';
import { gql, DocumentType } from '../../gql';

// #region GQL
const getCustomerByEmailQuery = gql(/* GraphQL */ `
  query AuthServiceGetCustomerByEmail($email: String!) {
    customer(where: { email: { _eq: $email } }) {
      id
      encryptedPassword
      appId
    }
  }
`);
// #endregion

type CustomerType = DocumentType<
  typeof getCustomerByEmailQuery
>['customer'][number];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateCustomer(
    username: string,
    pass: string
  ): Promise<CustomerType | null> {
    const data = await hasura.request(getCustomerByEmailQuery, {
      email: username,
    });
    const user = data?.customer[0];

    if (!user) return null;

    const isPasswordMatching = await bcrypt.compare(
      pass,
      user.encryptedPassword
    );

    if (!isPasswordMatching) {
      return null;
    }

    return user;
  }

  async loginCustomer(user: CustomerType) {
    const payload = {
      sub: user.id,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['customer'],
        'x-hasura-default-role': 'customer',
        'x-hasura-user-id': user.id,
        'x-hasura-app-id': user.appId,
        'x-hasura-role': 'customer',
      },
    };
    return {
      token: `Bearer ${this.jwtService.sign(payload)}`,
    };
  }

  async encryptPassword(password: string) {
    return bcrypt.hash(password, environment.bcrypt.saltRounds);
  }
}
