import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  // imports: [TypeOrmModule.forFeature([TodoEntity]), UserModule],
  imports: [UserModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
