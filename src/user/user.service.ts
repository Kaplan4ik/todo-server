import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // constructor(
  //   @InjectRepository(UserEntity)
  //   private readonly userRepository: Repository<UserEntity>,
  // ) {}

  async currentUser(userId: string): Promise<string> {
    console.group('user.service.ts', 'currentUser', '14');
    console.log('DEBUG1', userId);
    console.groupEnd();
    return userId;
    // const user = await this.getUserById(userId);
    // if (user) {
    //   return user;
    // }
    //
    // await this.userRepository.save({ auth_user_id: userId });
    // return await this.getUserById(userId);
  }

  // private async getUserById(userId: string): Promise<string> {
  //   return await this.userRepository.findOne({
  //     where: { auth_user_id: userId },
  //   });
  // }
}
