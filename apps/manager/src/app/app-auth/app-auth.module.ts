import { Module } from '@nestjs/common';
import { AppAuthService } from './app-auth.service';
import { AppAuthController } from './app-auth.controller';

@Module({
  providers: [AppAuthService],
  controllers: [AppAuthController],
})
export class AppAuthModule {}
