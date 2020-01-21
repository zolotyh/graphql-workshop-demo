import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index() {
    return this.appService.getUsers();
  }

  @Get('/users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('/articles')
  getArticles() {
    return this.appService.getArticles();
  }
}
