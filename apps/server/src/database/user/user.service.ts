import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async create(username: string): Promise<User> {
    const user = new User();
    user.username = username;
    console.log(user);
    await this.userRepo.save(user);
    console.log(user);
    return user;
  }
}
