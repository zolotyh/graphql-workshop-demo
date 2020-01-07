import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModuleForRoot, ConfigModuleForRoot} from 'src/config';
import {DatabaseModule} from './database/database.module';
import {UserModule} from './database/user/user.module';

@Module({
  imports: [
    GraphQLModuleForRoot,
    ConfigModuleForRoot,
    DatabaseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
