import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class SimpleUserStrategy extends PassportStrategy(
  Strategy,
  'simple-user'
) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateSimpleUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
