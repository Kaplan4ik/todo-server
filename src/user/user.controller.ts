import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body()
    { userId }: { userId: string },
  ): Promise<UserEntity> {
    return await this.userService.createUser(userId);
  }
}
