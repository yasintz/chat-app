import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { SimpleUser } from '../../database/entities/simple-user.entity';
import { environment } from '../../environments/environment';
import { JwtCommonPayloadType } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,

    @InjectRepository(SimpleUser)
    private usersRepository: Repository<SimpleUser>
  ) {}

  async validateSimpleUser(
    username: string,
    password: string
  ): Promise<SimpleUser | null> {
    const user = await this.usersRepository.findOneBy({ username });
    if (!user) {
      return null;
    }

    const isPasswordMatching = await bcrypt.compare(
      password,
      user.encryptedPassword
    );

    if (!isPasswordMatching) {
      return null;
    }

    return user;
  }

  async loginSimpleUser(user: SimpleUser) {
    const data: JwtCommonPayloadType = {
      sub: user.username,
    };
    return {
      token: `Bearer ${this.jwtService.sign(data, { issuer: 'simple-user' })}`,
    };
  }

  async encryptPassword(password: string) {
    return bcrypt.hash(password, environment.bcrypt.saltRounds);
  }

  async getSimpleUserByUsername(username: string) {
    return this.usersRepository.findOneBy({ username });
  }
}
