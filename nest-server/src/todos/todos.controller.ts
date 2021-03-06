import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './schemes/todos.schema';
import { TodosService } from './todos.service';
// TODO: handle errors
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todosService.getAll();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string): Promise<Todo> {
    return this.todosService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createTodo(@Body() body: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(body);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Promise<Todo> {
    return this.todosService.delete(id);
  }

  @Put(':id')
  updateTodo(
    @Body() body: CreateTodoDto,
    @Param('id') id: string,
  ): Promise<Todo> {
    return this.todosService.upadte(body, id);
  }
}
