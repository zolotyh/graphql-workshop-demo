import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModuleForRoot, ConfigModuleForRoot } from 'src/config';
import { RecipesModule } from './recipes/recipes.module';
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm';
import ormconfig from '../ormconfig';


@Module({
  imports: [GraphQLModuleForRoot, ConfigModuleForRoot, RecipesModule, TypeOrmModule.forRoot(ormconfig as TypeOrmModuleOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
