import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoEntity } from '../entities/todo.entity';
import { CreateTodoInput } from './inputs/create-todo.input';
import { TodoService } from './todo.service';

@Resolver('Todos')
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoEntity])
  async getTodos(): Promise<TodoEntity[]> {
    return await this.todoService.getTodos();
  }

  @Mutation(() => TodoEntity)
  async createTodo(
    @Args('createTodo') createTodoInput: CreateTodoInput,
  ): Promise<TodoEntity[]> {
    return await this.todoService.createTodo(createTodoInput);
  }

  @Mutation(() => Number)
  async deleteTodo(@Args('id') id: number): Promise<TodoEntity[]> {
    return await this.todoService.deleteTodo(id);
  }

  @Mutation(() => TodoEntity)
  async updateTodo(@Args('id') id: number): Promise<TodoEntity[]> {
    return await this.todoService.updateTodo(id);
  }
}
