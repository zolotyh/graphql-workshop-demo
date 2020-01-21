import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver],
})
export class SchemaModule {}
