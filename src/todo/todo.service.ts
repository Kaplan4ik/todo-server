import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from '../schemas/Todo.schema';
import { ITodo } from './interfaces/todo';

@Injectable()
export class TodoService {
  private todos: ITodo[] = [];

  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  getTodos() {
    return this.todoModel.find();
  }

  async createTodo(title: string) {
    const newRecord = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    const newTodo = new this.todoModel(newRecord);
    await newTodo.save();
    return this.todoModel.find();
  }

  async deleteTodo(id: string) {
    await this.todoModel.findOneAndDelete({ id });
    return this.todoModel.find().exec();
  }

  async updateTodo(id: string, completed: boolean) {
    await this.todoModel.findOneAndUpdate(
      { id },
      {
        completed,
      },
    );
    return this.todoModel.find().exec();
  }
}
