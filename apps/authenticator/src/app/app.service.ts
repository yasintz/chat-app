import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SimpleTodo } from '../database/entities/simple-todo.entity';
import { SimpleUser } from '../database/entities/simple-user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(SimpleTodo)
    private todoRepository: Repository<SimpleTodo>
  ) {}

  getAllTodos() {
    return this.todoRepository.find();
  }
  async createTodo(user: SimpleUser, text: string) {
    const todo = this.todoRepository.create({
      text,
      completed: false,
      userId: user.id,
    });

    await this.todoRepository.save(todo);

    return todo;
  }

  async toggleTodo(user: SimpleUser, todoId: string) {
    const todo = await this.todoRepository.findOneOrFail({
      where: { id: todoId, userId: user.id },
    });

    await this.todoRepository.update(
      { id: todo.id },
      { completed: !todo.completed }
    );

    todo.completed = !todo.completed;

    return todo;
  }
}
