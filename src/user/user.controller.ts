import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './inputs/create-user.input';
import { UserResolver } from './user.resolver';

@Controller('user')
export class UserController {
  constructor(private readonly userResolver: UserResolver) {}

  @Post()
  async createUser(
    @Body()
    userId: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userResolver.createUser(userId);
  }
}
