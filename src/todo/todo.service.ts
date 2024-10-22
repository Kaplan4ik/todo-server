import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoEntity } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getTodos(userId: string): Promise<TodoEntity[]> {
    const user = await this.getUserById(userId);

    return await this.todoRepository.find({
      where: { user: { id: user.id } },
    });
  }

  async createTodo(
    todoInput: CreateTodoDto,
    userId: string,
  ): Promise<TodoEntity[]> {
    const user = await this.getUserById(userId);

    const newTodo = this.todoRepository.create({
      ...todoInput,
      user: user,
    });

    await this.todoRepository.save(newTodo);

    return await this.getTodos(userId);
  }

  async deleteTodo(userId: string, todoId: number): Promise<TodoEntity[]> {
    const user = await this.getUserById(userId);

    await this.todoRepository.delete({ id: todoId, user: { id: user.id } });

    return await this.getTodos(userId);
  }

  async updateTodo(userId: string, todoId: number): Promise<TodoEntity[]> {
    const user = await this.getUserById(userId);

    const todo = await this.todoRepository.findOne({
      where: { id: todoId, user: { id: user.id } },
    });

    await this.todoRepository.update(
      { id: todoId },
      { completed: !todo.completed },
    );

    return await this.getTodos(userId);
  }

  private async getUserById(userId: string): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: { auth_user_id: userId },
    });
  }
}
