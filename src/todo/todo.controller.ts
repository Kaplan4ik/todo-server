import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoEntity } from '../entities/todo.entity';
import { CreateTodoInput } from './inputs/create-todo.input';
import { TodoResolver } from './todo.resolver';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoResolver: TodoResolver) {}

  @Get()
  async getTodos(): Promise<TodoEntity[]> {
    return await this.todoResolver.getTodos();
  }

  @Post()
  async createTodo(
    @Body()
    title: CreateTodoInput,
  ): Promise<TodoEntity[]> {
    return await this.todoResolver.createTodo(title);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string): Promise<TodoEntity[]> {
    return this.todoResolver.deleteTodo(Number(id));
  }

  @Patch('/:id')
  updateTodo(@Param('id') id: string): Promise<TodoEntity[]> {
    return this.todoResolver.updateTodo(Number(id));
  }
}
