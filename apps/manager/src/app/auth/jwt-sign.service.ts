import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Member, Customer } from '../../gql/graphql';

enum Roles {
  CUSTOMER = 'customer',
  MEMBER = 'member',
  PUBLIC = 'public',
}

@Injectable()
export class JwtSignService {
  constructor(private jwtService: JwtService) {}

  private getPayload(id: string, appId: string, role: Roles) {
    return {
      sub: id,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': [role],
        'x-hasura-default-role': role,
        'x-hasura-user-id': id,
        'x-hasura-app-id': appId,
      },
    };
  }

  async signCustomerToken(customer: Pick<Customer, 'id' | 'appId'>) {
    const payload = this.getPayload(
      customer.id,
      customer.appId,
      Roles.CUSTOMER
    );
    return `Bearer ${this.jwtService.sign(payload)}`;
  }

  async signMemberToken(member: Pick<Member, 'id' | 'appId'>) {
    const payload = this.getPayload(member.id, member.appId, Roles.MEMBER);
    return `Bearer ${this.jwtService.sign(payload)}`;
  }
}
