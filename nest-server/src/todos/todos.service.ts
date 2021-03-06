import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo, TodoDocument } from './schemes/todos.schema';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async getAll(): Promise<Todo[]> {
    const todos = await this.todoModel.find().exec();
    return todos.map((todo) => ({
      // TODO: alias
      ...todo,
      id: todo._id,
    }));
  }

  async getById(id: string): Promise<Todo> {
    return this.todoModel.findById(id);
  }

  async create(todoCreateDto: CreateTodoDto): Promise<Todo> {
    const todo = new this.todoModel(todoCreateDto);
    return todo.save();
  }

  async delete(id: string) {
    return this.todoModel.findByIdAndRemove(id);
  }

  async upadte(todoDto: CreateTodoDto, id: string): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(id, todoDto, { new: true });
  }
}
