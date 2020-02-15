import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user/user.entity';
import { Article } from './article/article.entity';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(User) public readonly user: Repository<User>,
    @InjectRepository(Article) public readonly article: Repository<Article>
  ) {}
}
