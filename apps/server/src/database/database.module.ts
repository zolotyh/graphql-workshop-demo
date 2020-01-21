import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { ConnectionOptionsReader } from 'typeorm';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

const TypeOrmModuleForRoot = TypeOrmModule.forRootAsync({
  useFactory: async () => {
    const connectionName = 'default';
    const root = path.resolve(__dirname, '../../');
    const reader = new ConnectionOptionsReader({ root });

    let opts: Writeable<PostgresConnectionOptions>;
    try {
      opts = (await reader.get(connectionName)) as any;
    } catch (e) {
      throw new Error(`DatabaseModule: cannot load configs for TypeORM from ${root}`);
    }

    // see: https://typeorm.io/#/connection-options
    opts.synchronize = process.env.NODE_ENV === 'development';
    // opts.logging = true;

    return opts;
  },
});

@Module({
  imports: [TypeOrmModuleForRoot, UserModule, ArticleModule],
  exports: [UserModule, ArticleModule],
})
export class DatabaseModule {}
