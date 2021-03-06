import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot(
      // TODO: move to config
      'mongodb+srv://oleh:q12345678@cluster0.2magi.azure.mongodb.net/todosApp?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
