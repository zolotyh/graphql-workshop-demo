import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModuleForRoot, ConfigModuleForRoot} from 'src/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from 'src/database/user/user.module';
import {UserService} from 'src/database/user/user.service';

@Module({
  imports: [
    GraphQLModuleForRoot,
    ConfigModuleForRoot,
    TypeOrmModule.forRoot(),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {
}
