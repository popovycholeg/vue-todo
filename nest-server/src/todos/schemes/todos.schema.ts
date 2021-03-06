import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  title: string;

  @Prop()
  completed: boolean;

  transform: () => Todo;
}

const TodoSchema = SchemaFactory.createForClass(Todo);
TodoSchema.methods.transform = function () {
  const obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;

  return obj;
};

export default TodoSchema;
