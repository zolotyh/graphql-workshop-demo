import {Injectable, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepo: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }
}
