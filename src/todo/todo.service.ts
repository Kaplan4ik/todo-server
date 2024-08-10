import { Injectable } from '@nestjs/common';
import { ITodo } from './interfaces/todo';

@Injectable()
export class TodoService {
  private todos: ITodo[] = [];

  getTodos(): ITodo[] {
    return this.todos;
  }

  createTodo(title: string): ITodo[] {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    this.todos.push(newTodo);

    return this.todos;
  }

  deleteTodo(id: string): ITodo[] {
    this.todos = this.todos.filter((todo) => todo.id !== Number(id));

    return this.todos;
  }

  updateTodo(id: string): ITodo[] {
    this.todos = this.todos.map((todo) =>
      todo.id === Number(id) ? { ...todo, completed: !todo.completed } : todo,
    );

    return this.todos;
  }
}
