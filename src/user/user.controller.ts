import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../authorization/authorization.guard';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@UseGuards(AuthorizationGuard)
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //TODO: Create interface for request
  @Get()
  async currentUser(@Req() request: any): Promise<UserEntity> {
    const userId = request.userId;

    return await this.userService.currentUser(userId);
  }
}
