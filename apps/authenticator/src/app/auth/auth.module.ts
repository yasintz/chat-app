import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { environment } from '../../environments/environment';
import { AuthController } from './auth.controller';
import { SimpleUserStrategy } from './strategy/simple-user.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimpleUser } from '../../database/entities/simple-user.entity';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([SimpleUser]),
    PassportModule,
    JwtModule.register({
      secret: environment.jwtConstants.secret,
      signOptions: {
        expiresIn: environment.jwtConstants.expiresIn,
      },
    }),
  ],
  providers: [AuthService, SimpleUserStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
