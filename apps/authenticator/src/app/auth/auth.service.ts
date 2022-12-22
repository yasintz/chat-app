import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { SimpleUser } from '../../database/entities/simple-user.entity';
import { environment } from '../../environments/environment';
import { UserSignupDto } from './auth.schema';
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
      sub: user.id,
      iss: 'example',
      'https://chat.app/jwt/claim': {
        'user-id': user.id,
        'app-id': 'ae993ef6-7618-49c5-b032-2e072aa57973',
        user: {
          name: user.username,
        },
      },
    };
    return {
      token: `Bearer ${this.jwtService.sign(data, { issuer: 'simple-user' })}`,
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }

  async signupSimpleUser(user: UserSignupDto) {
    const simpleUser = this.usersRepository.create({
      encryptedPassword: await this.encryptPassword(user.password),
      username: user.username,
    });

    await this.usersRepository.save(simpleUser);

    return this.loginSimpleUser(simpleUser);
  }

  async encryptPassword(password: string) {
    return bcrypt.hash(password, environment.bcrypt.saltRounds);
  }

  async getSimpleUserById(id: string) {
    return this.usersRepository.findOneBy({ id });
  }
}
