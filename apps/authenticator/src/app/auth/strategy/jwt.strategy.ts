import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtCommonPayloadType } from '../auth.types';
import { AuthService } from '../auth.service';
import { publicKey } from '../../../environments/jwt.keys';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: publicKey,
      algorithms: ['RS256'],
    } as StrategyOptions);
  }

  async validate(payload: JwtCommonPayloadType) {
    const username = payload.sub;
    return this.authService.getSimpleUserById(username);
  }
}
