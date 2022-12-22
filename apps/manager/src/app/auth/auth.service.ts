import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import hasura from '../../clients/graphql-request';
import { environment } from '../../environments/environment';
import { DocumentType } from '../../gql';
import { getCustomerByEmailQuery, getMemberByEmailQuery } from './auth.gql';

enum Roles {
  CUSTOMER = 'customer',
  MEMBER = 'member',
  ADMIN = 'admin',
}

type CustomerType = DocumentType<
  typeof getCustomerByEmailQuery
>['customer'][number];

type MemberType = DocumentType<typeof getMemberByEmailQuery>['member'][number];
@Injectable()
export class AuthService {
  allowedRoles = Object.values(Roles);
  defaultRole = Roles.CUSTOMER;

  constructor(private jwtService: JwtService) {}

  async validateCustomer(
    username: string,
    pass: string
  ): Promise<CustomerType | null> {
    const data = await hasura.request(getCustomerByEmailQuery, {
      email: username,
    });
    const user = data?.customer[0];

    if (!user || !user.encryptedPassword) return null;

    const isPasswordMatching = await bcrypt.compare(
      pass,
      user.encryptedPassword
    );

    if (!isPasswordMatching) {
      return null;
    }

    return user;
  }

  async validateMember(
    username: string,
    pass: string
  ): Promise<MemberType | null> {
    const data = await hasura.request(getMemberByEmailQuery, {
      email: username,
    });
    const user = data?.member[0];

    if (!user || !user.encryptedPassword) return null;

    const isPasswordMatching = await bcrypt.compare(
      pass,
      user.encryptedPassword
    );

    if (!isPasswordMatching) {
      return null;
    }

    return user;
  }

  async encryptPassword(password: string) {
    return bcrypt.hash(password, environment.bcrypt.saltRounds);
  }
}
