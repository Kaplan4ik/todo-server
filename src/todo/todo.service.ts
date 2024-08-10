import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from '../entities/todo.entity';
import { CreateTodoInput } from './inputs/create-todo.input';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async getTodos(): Promise<TodoEntity[]> {
    return await this.todoRepository.find();
  }

  async createTodo(todoInput: CreateTodoInput): Promise<TodoEntity[]> {
    await this.todoRepository.save({ ...todoInput });
    return await this.getTodos();
  }

  async deleteTodo(id: number): Promise<TodoEntity[]> {
    await this.todoRepository.delete({ id });
    return await this.getTodos();
  }

  async updateTodo(id: number): Promise<TodoEntity[]> {
    const todo = await this.getTodoById(id);
    await this.todoRepository.update({ id }, { completed: !todo.completed });
    return await this.getTodos();
  }

  private async getTodoById(id: number): Promise<TodoEntity> {
    return await this.todoRepository.findOne({
      where: { id },
    });
  }
}
