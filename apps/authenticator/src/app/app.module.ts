import { Module } from '@nestjs/common';
import { ZodValidationPipe } from '@anatine/zod-nestjs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimpleTodo } from '../database/entities/simple-todo.entity';
import { SimpleUser } from '../database/entities/simple-user.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${process.cwd()}/dist/db.sqlite`,
      entities: [SimpleUser, SimpleTodo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([SimpleTodo]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
