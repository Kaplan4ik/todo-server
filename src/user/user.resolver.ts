// import { Args, Mutation, Resolver } from '@nestjs/graphql';
// import { UserEntity } from './entities/user.entity';
// import { CreateUserInput } from './inputs/create-user.input';
// import { UserService } from './user.service';
//
// @Resolver(() => UserEntity)
// export class UserResolver {
//   constructor(private readonly userService: UserService) {}
//
//   @Mutation(() => UserEntity)
//   async createUser(@Args('id') userId: CreateUserInput): Promise<UserEntity> {
//     return await this.userService.createUser(userId);
//   }
// }
