import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo, TodoDocument } from './schemes/todos.schema';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async getAll(): Promise<Todo[]> {
    return this.todoModel.aggregate([
      {
        $project: {
          id: '$_id',
          title: '$title',
          completed: '$completed',
        },
      },
    ]);
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
