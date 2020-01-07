import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModuleForRoot, ConfigModuleForRoot} from 'src/config';

@Module({
  imports: [GraphQLModuleForRoot, ConfigModuleForRoot],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
