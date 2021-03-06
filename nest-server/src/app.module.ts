import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { TodosModule } from './todos/todos.module';
import { CONNECTION_STRING } from './config/db';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(CONNECTION_STRING),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
