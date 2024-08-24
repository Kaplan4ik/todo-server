import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { TodoEntity } from './entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity]), UserModule],
  controllers: [TodoController],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
