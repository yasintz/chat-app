import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { SimpleUser } from '../../database/entities/simple-user.entity';
import { environment } from '../../environments/environment';

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
    const data = {
      username: user.username,
    };
    return {
      token: `Bearer ${this.jwtService.sign(data)}`,
    };
  }

  async encryptPassword(password: string) {
    return bcrypt.hash(password, environment.bcrypt.saltRounds);
  }
}
