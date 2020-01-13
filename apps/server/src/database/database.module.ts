import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { ConnectionOptionsReader } from 'typeorm';
import { UserModule } from './user/user.module';

const TypeOrmModuleForRoot = TypeOrmModule.forRootAsync({
  useFactory: async () => {
    const connectionName = 'default';
    const root = path.resolve(__dirname, '../../');
    const reader = new ConnectionOptionsReader({ root });

    let opts;
    try {
      opts = await reader.get(connectionName);
    } catch (e) {
      throw new Error(`DatabaseModule: cannot load configs for TypeORM from ${root}`);
    }

    // see: https://typeorm.io/#/connection-options
    opts.synchronize = process.env.NODE_ENV === 'development';

    return opts;
  },
});

@Module({
  imports: [TypeOrmModuleForRoot, UserModule],
  exports: [UserModule],
})
export class DatabaseModule {}
