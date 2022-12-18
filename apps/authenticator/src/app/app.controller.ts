import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
  Body,
} from '@nestjs/common';
import { TodoCreateDto } from './app.schema';

import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guard/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get('todos')
  getProfile() {
    return this.appService.getAllTodos();
  }

  @UseGuards(JwtAuthGuard)
  @Post('todo/toggle/:todoId')
  toggle(@Request() req, @Param('todoId') todoId: string) {
    return this.appService.toggleTodo(req.user, todoId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('todo/create')
  create(@Request() req, @Body() todo: TodoCreateDto) {
    return this.appService.createTodo(req.user, todo.text);
  }
}
