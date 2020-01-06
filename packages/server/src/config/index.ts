import {ConfigModule} from '@nestjs/config';
import {GraphQLModule} from '@nestjs/graphql';
import * as path from 'path';

export const ConfigModuleForRoot = ConfigModule.forRoot();

export const GraphQLModuleForRoot = GraphQLModule.forRoot({
  debug: true,
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: path.join(process.cwd(), 'src/graphql.generated.ts'),
    outputAs: 'class',
  },
});
