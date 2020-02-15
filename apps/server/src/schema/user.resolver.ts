import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from 'src/database/user/user.entity';
import { UserService } from 'src/database/user/user.service';
import { DatabaseService } from '../database/database.service';
import { Int } from 'type-graphql';
import { Inject } from '@nestjs/common';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    @Inject(DatabaseService) private readonly db: DatabaseService
  ) {}

  @Query(() => User, { nullable: true })
  async user(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.db.user.findOne({ id });
  }

  @Query(() => [User])
  async userList(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async userCreate(@Args({ name: 'name', type: () => String, nullable: false }) name: string) {
    const user = this.db.user.create({ username: name });
    return await this.db.user.save(user);
  }
}
