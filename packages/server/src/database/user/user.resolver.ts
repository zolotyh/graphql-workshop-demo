import {Resolver, Query} from '@nestjs/graphql';
import {User} from 'src/database/user/user.entity';
import {UserService} from 'src/database/user/user.service';

@Resolver()
export class UserResolver {

  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async userlist(): Promise<User[]> {
    return this.userService.findAll();
  }
}
