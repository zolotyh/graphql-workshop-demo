import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './database/user/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService) {}

  @Get()
  index() {
    return this.appService.getUsers();
  }

  @Get('/users')
  getUsers() {
    return this.userService.findAll();
  }

  @Get('/users/add/:name')
  createUsers(@Param('name') name: string) {
    return this.userService.create(name);
  }

  @Get('/articles')
  getArticles() {
    return this.appService.getArticles();
  }
}
