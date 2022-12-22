import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomerStrategy } from './strategy/customer.strategy';
import { MemberStrategy } from './strategy/member.strategy';
import { JwtSignService } from './jwt-sign.service';
import { JwtModule } from '../jwt.module';

@Module({
  imports: [JwtModule],
  providers: [
    AuthService,
    JwtSignService,
    CustomerStrategy,
    MemberStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
