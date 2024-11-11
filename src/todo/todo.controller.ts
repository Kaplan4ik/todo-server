import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthorizationGuard } from '../authorization/authorization.guard';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoService } from './todo.service';

@UseGuards(AuthorizationGuard)
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  //TODO: Create interface for request
  @Get()
  async getTodos(@Req() request: any): Promise<TodoEntity[]> {
    const userId = request.userId;
    return await this.todoService.getTodos(userId);
  }

  @Post()
  async createTodo(
    @Body() title: CreateTodoDto,
    @Req() request: any,
  ): Promise<TodoEntity[]> {
    const userId = request.userId;
    return await this.todoService.createTodo(title, userId);
  }

  @Delete('/:id')
  deleteTodo(
    @Req() request: any,
    @Param('id') id: string,
  ): Promise<TodoEntity[]> {
    const userId = request.userId;
    return this.todoService.deleteTodo(userId, Number(id));
  }

  @Patch('/:id')
  updateTodo(
    @Req() request: any,
    @Param('id') id: string,
  ): Promise<TodoEntity[]> {
    const userId = request.userId;
    return this.todoService.updateTodo(userId, Number(id));
  }
}
