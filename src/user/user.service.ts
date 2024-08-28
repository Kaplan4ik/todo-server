import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './inputs/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser({ userId }: CreateUserInput): Promise<UserEntity> {
    const user = await this.getUserById(userId);
    if (user) {
      return user;
    }

    await this.userRepository.save({ auth_user_id: userId });
    return await this.getUserById(userId);
  }

  private async getUserById(userId: string): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: { auth_user_id: userId },
    });
  }
}
