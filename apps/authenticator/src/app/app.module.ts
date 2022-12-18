import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimpleTodo } from '../database/entities/simple-todo.entity';
import { SimpleUser } from '../database/entities/simple-user.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${process.cwd()}/dist/db.sqlite`,
      entities: [SimpleUser, SimpleTodo],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
