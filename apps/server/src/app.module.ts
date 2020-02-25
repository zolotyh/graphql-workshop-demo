import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModuleForRoot, ConfigModuleForRoot } from 'src/config';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [GraphQLModuleForRoot, ConfigModuleForRoot, RecipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
