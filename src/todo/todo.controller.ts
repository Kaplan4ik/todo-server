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
import { TodoEntity } from './entities/todo.entity';
import { CreateTodoInput } from './inputs/create-todo.input';
import { TodoResolver } from './todo.resolver';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoResolver: TodoResolver) {}

  //TODO: Implement middleware to check if user is authorized to access. Test
  @UseGuards(AuthorizationGuard)
  @Get('/:id')
  async getTodos(@Param('id') userId: string): Promise<TodoEntity[]> {
    return await this.todoResolver.getTodos(userId);
  }

  @UseGuards(AuthorizationGuard)
  @Post('/:id')
  async createTodo(
    @Body()
    title: CreateTodoInput,
    @Param('id') userId: string,
  ): Promise<TodoEntity[]> {
    return await this.todoResolver.createTodo(title, userId);
  }

  @UseGuards(AuthorizationGuard)
  @Delete('/:userId/:id')
  deleteTodo(
    @Param('userId') userId: string,
    @Param('id') id: string,
  ): Promise<TodoEntity[]> {
    return this.todoResolver.deleteTodo(userId, Number(id));
  }

  @UseGuards(AuthorizationGuard)
  @Patch('/:userId/:id')
  updateTodo(
    @Param('userId') userId: string,
    @Param('id') id: string,
  ): Promise<TodoEntity[]> {
    return this.todoResolver.updateTodo(userId, Number(id));
  }
}
