import {Controller, Get} from '@nestjs/common';
import {UserService} from 'src/database/user/user.service';
import {User} from 'src/database/user/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.userService.findAll();
  }
}
