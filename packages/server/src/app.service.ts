import {Injectable} from '@nestjs/common';
import { UserService } from './database/user/user.service';

@Injectable()
export class AppService {
  constructor(
      private userService: UserService) {}

  async getHello() {
    return this.userService.findAll();
  }
}
