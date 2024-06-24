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
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): any {
    return this.todoService.getTodos();
  }

  @Post()
  createTodo(
    @Body()
    { title }: CreateTodoDto,
  ) {
    return this.todoService.createTodo(title);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }

  @Patch('/:id')
  updateTodo(@Param('id') id: string, @Body() { completed }: UpdateTodoDto) {
    return this.todoService.updateTodo(id, completed);
  }
}
