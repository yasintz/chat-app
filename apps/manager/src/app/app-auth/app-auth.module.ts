import { Module } from '@nestjs/common';
import { AppAuthService } from './app-auth.service';
import { AppAuthController } from './app-auth.controller';
import { JwtSignService } from '../auth/jwt-sign.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '../jwt.module';

@Module({
  imports: [PassportModule, JwtModule],
  providers: [AppAuthService, JwtSignService],
  controllers: [AppAuthController],
})
export class AppAuthModule {}
