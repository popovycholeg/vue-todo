import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo, TodoDocument } from './schemes/todos.schema';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async getAllTodos(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async createTodo(todoCreateDto: CreateTodoDto): Promise<Todo> {
    const todo = new this.todoModel(todoCreateDto);
    return todo.save();
  }
}
