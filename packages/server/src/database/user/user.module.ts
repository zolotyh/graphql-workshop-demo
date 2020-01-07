import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from 'src/database/user/user.entity';
import {UserResolver} from 'src/database/user/user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}
