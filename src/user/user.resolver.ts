import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './inputs/create-user.input';
import { UserService } from './user.service';

@Resolver('Users')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  async createUser(@Args('user') user: CreateUserInput): Promise<UserEntity> {
    return await this.userService.createUser(user);
  }
}
