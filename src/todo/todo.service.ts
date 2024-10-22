import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor() {} // private readonly userRepository: Repository<UserEntity>, // @InjectRepository(UserEntity) // private readonly todoRepository: Repository<TodoEntity>, // @InjectRepository(TodoEntity)

  async getTodos(userId: string): Promise<string[]> {
    console.group('todo.service.ts', 'getTodos', '18');
    console.log('DEBUG1', userId);
    console.groupEnd();
    return [];
    // const user = await this.getUserById(userId);
    //
    // return await this.todoRepository.find({
    //   where: { user: { id: user.id } },
    // });
  }

  async createTodo(
    todoInput: CreateTodoDto,
    userId: string,
  ): Promise<string[]> {
    console.group('todo.service.ts', 'createTodo', '28');
    console.log('DEBUG1', todoInput);
    console.log('DEBUG1', userId);
    console.groupEnd();
    return [];
    // const user = await this.getUserById(userId);
    //
    // const newTodo = this.todoRepository.create({
    //   ...todoInput,
    //   user: user,
    // });
    //
    // await this.todoRepository.save(newTodo);
    //
    // return await this.getTodos(userId);
  }

  async deleteTodo(userId: string, todoId: number): Promise<string[]> {
    console.group('todo.service.ts', 'deleteTodo', '46');
    console.log('DEBUG1', userId);
    console.log('DEBUG1', todoId);
    console.groupEnd();
    return [];
    // const user = await this.getUserById(userId);
    //
    // await this.todoRepository.delete({ id: todoId, user: { id: user.id } });
    //
    // return await this.getTodos(userId);
  }

  async updateTodo(userId: string, todoId: number): Promise<string[]> {
    console.group('todo.service.ts', 'updateTodo', '59');
    console.log('DEBUG1', userId);
    console.log('DEBUG1', todoId);
    console.groupEnd();
    return [];
    // const user = await this.getUserById(userId);
    //
    // const todo = await this.todoRepository.findOne({
    //   where: { id: todoId, user: { id: user.id } },
    // });
    //
    // await this.todoRepository.update(
    //   { id: todoId },
    //   { completed: !todo.completed },
    // );
    //
    // return await this.getTodos(userId);
  }

  // private async getUserById(userId: string): Promise<UserEntity> {
  //   return await this.userRepository.findOne({
  //     where: { auth_user_id: userId },
  //   });
  // }
}
