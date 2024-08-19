import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthorizationGuard } from '../authorization/authorization.guard';
import { TodoEntity } from '../entities/todo.entity';
import { CreateTodoInput } from './inputs/create-todo.input';
import { TodoResolver } from './todo.resolver';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoResolver: TodoResolver) {}

  //TODO: Implement middleware to check if user is authorized to access
  @UseGuards(AuthorizationGuard)
  @Get()
  async getTodos(): Promise<TodoEntity[]> {
    return await this.todoResolver.getTodos();
  }

  @UseGuards(AuthorizationGuard)
  @Post()
  async createTodo(
    @Body()
    title: CreateTodoInput,
  ): Promise<TodoEntity[]> {
    return await this.todoResolver.createTodo(title);
  }

  @UseGuards(AuthorizationGuard)
  @Delete('/:id')
  deleteTodo(@Param('id') id: string): Promise<TodoEntity[]> {
    return this.todoResolver.deleteTodo(Number(id));
  }

  @UseGuards(AuthorizationGuard)
  @Patch('/:id')
  updateTodo(@Param('id') id: string): Promise<TodoEntity[]> {
    return this.todoResolver.updateTodo(Number(id));
  }
}
