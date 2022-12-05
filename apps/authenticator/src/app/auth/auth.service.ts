import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { environment } from '../../environments/environment';

type CustomerType = { email: string; password: string };
type MemberType = { email: string; password: string };

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateCustomer(
    email: string,
    password: string
  ): Promise<CustomerType | null> {
    return { email, password };
  }
  async validateMember(
    email: string,
    password: string
  ): Promise<CustomerType | null> {
    return { email, password };
  }

  async loginCustomer(user: CustomerType) {
    return {
      token: `Bearer ${this.jwtService.sign(user)}`,
    };
  }

  async loginMember(user: MemberType) {
    return {
      token: `Bearer ${this.jwtService.sign(user)}`,
    };
  }

  async encryptPassword(password: string) {
    return bcrypt.hash(password, environment.bcrypt.saltRounds);
  }
}
