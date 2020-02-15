import { Injectable } from '@nestjs/common';
import { UserService } from './database/user/user.service';
import { ArticleService } from './database/article/article.service';

@Injectable()
export class AppService {
  constructor(private userService: UserService, private articleService: ArticleService) {}

  async getUsers() {
    return this.userService.findAll();
  }

  async getArticles() {
    return this.articleService.findAll();
  }
}
