import { Controller, Get } from '@nestjs/common';
import { Todo } from './schemes/todos.schema';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todosService.getAllTodos();
  }
}
