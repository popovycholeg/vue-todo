import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './schemes/todos.schema';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todosService.getAllTodos();
  }

  @Post()
  createTodo(@Body() body: CreateTodoDto): Promise<Todo> {
    return this.todosService.createTodo(body);
  }
}
