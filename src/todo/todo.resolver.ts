import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoEntity } from './entities/todo.entity';
import { CreateTodoInput } from './inputs/create-todo.input';
import { TodoService } from './todo.service';

@Resolver('Todos')
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoEntity])
  async getTodos(@Args('userId') userId: string): Promise<TodoEntity[]> {
    return await this.todoService.getTodos(userId);
  }

  @Mutation(() => [TodoEntity])
  async createTodo(
    @Args('createTodo') createTodoInput: CreateTodoInput,
    @Args('userId') userId: string,
  ): Promise<TodoEntity[]> {
    return await this.todoService.createTodo(createTodoInput, userId);
  }

  @Mutation(() => [TodoEntity])
  async deleteTodo(
    @Args('userId') userId: string,
    @Args('id') id: number,
  ): Promise<TodoEntity[]> {
    return await this.todoService.deleteTodo(userId, id);
  }

  @Mutation(() => [TodoEntity])
  async updateTodo(
    @Args('userId') userId: string,
    @Args('id') id: number,
  ): Promise<TodoEntity[]> {
    return await this.todoService.updateTodo(userId, id);
  }
}
