import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { environment } from '../../environments/environment';
import { AuthController } from './auth.controller';
import { CustomerStrategy } from './customer.strategy';
import { MemberStrategy } from './member.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      privateKey: environment.jwtConstants.privateKey,
      signOptions: {
        expiresIn: environment.jwtConstants.expiresIn,
        algorithm: 'RS256',
      },
    }),
  ],
  providers: [AuthService, CustomerStrategy, MemberStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
