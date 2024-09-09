import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../authorization/authorization.guard';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@UseGuards(AuthorizationGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async createUser(@Req() request: any): Promise<UserEntity> {
    const userId = request.userId;
    return await this.userService.createUser(userId);
  }
}
