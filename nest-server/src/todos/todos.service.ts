import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  getAllTodos(): string {
    return 'all';
  }
}
