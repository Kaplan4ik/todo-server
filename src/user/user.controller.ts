import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../authorization/authorization.guard';

@UseGuards(AuthorizationGuard)
@Controller('user')
export class UserController {
  constructor() {}

  //TODO: Create interface for request
  @Get()
  async currentUser(@Req() request: any): Promise<string> {
    const userId = request.userId;

    return userId;

    // return await this.userService.currentUser(userId);
  }
}
