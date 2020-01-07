import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModuleForRoot, ConfigModuleForRoot} from 'src/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [GraphQLModuleForRoot, ConfigModuleForRoot, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
