import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModuleForRoot, ConfigModuleForRoot } from 'src/config';
import { DatabaseModule } from './database/database.module';
import { SchemaModule } from './schema/schema.module';

@Module({
  imports: [DatabaseModule, GraphQLModuleForRoot, ConfigModuleForRoot, SchemaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
