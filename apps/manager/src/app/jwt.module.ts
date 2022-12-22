import { Module, Global } from '@nestjs/common';
import { JwtModule as JwtModuleBase } from '@nestjs/jwt';
import { environment } from '../environments/environment';

@Global()
@Module({
  imports: [
    JwtModuleBase.register({
      privateKey: environment.jwtConstants.privateKey,
      signOptions: {
        expiresIn: environment.jwtConstants.expiresIn,
        algorithm: 'RS256',
      },
    }),
  ],
  exports: [JwtModuleBase],
})
export class JwtModule {}
