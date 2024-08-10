import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ITodo } from './interfaces/todo';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): ITodo[] {
    return this.todoService.getTodos();
  }

  @Post()
  createTodo(
    @Body()
    { title }: CreateTodoDto,
  ): ITodo[] {
    return this.todoService.createTodo(title);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string): ITodo[] {
    return this.todoService.deleteTodo(id);
  }

  @Patch('/:id')
  updateTodo(@Param('id') id: string): ITodo[] {
    return this.todoService.updateTodo(id);
  }
}
