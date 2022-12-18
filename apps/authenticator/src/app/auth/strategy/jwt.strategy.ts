import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { environment } from '../../../environments/environment';
import { JwtCommonPayloadType } from '../auth.types';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.jwtConstants.secret,
    } as StrategyOptions);
  }

  async validate(payload: JwtCommonPayloadType) {
    const username = payload.sub;
    return this.authService.getSimpleUserByUsername(username);
  }
}
