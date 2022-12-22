import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppAuthModule } from './app-auth/app-auth.module';

@Module({
  imports: [AuthModule, AppAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
