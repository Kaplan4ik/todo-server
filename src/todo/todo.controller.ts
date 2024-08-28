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
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  //TODO: Implement middleware to check if user is authorized to access.
  @UseGuards(AuthorizationGuard)
  @Get('/:userId')
  async getTodos(@Param('userId') userId: string): Promise<TodoEntity[]> {
    return await this.todoService.getTodos(userId);
  }

  @UseGuards(AuthorizationGuard)
  @Post('/:userId')
  async createTodo(
    @Body() title: CreateTodoDto,
    @Param('userId') userId: string,
  ): Promise<TodoEntity[]> {
    return await this.todoService.createTodo(title, userId);
  }

  @UseGuards(AuthorizationGuard)
  @Delete('/:userId/:id')
  deleteTodo(
    @Param('userId') userId: string,
    @Param('id') id: string,
  ): Promise<TodoEntity[]> {
    return this.todoService.deleteTodo(userId, Number(id));
  }

  @UseGuards(AuthorizationGuard)
  @Patch('/:userId/:id')
  updateTodo(
    @Param('userId') userId: string,
    @Param('id') id: string,
  ): Promise<TodoEntity[]> {
    return this.todoService.updateTodo(userId, Number(id));
  }
}
