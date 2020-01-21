import { GraphQLModule } from '@nestjs/graphql';
// import * as path from 'path';

export const GraphQLModuleForRoot = GraphQLModule.forRoot({
  debug: true,
  playground: true,
  // 🥇 code-first approach
  autoSchemaFile: 'schema.graphql',
  // 🥈 schema-first approach
  // typePaths: ['./**/*.graphql'],
  // definitions: {
  //   path: path.join(process.cwd(), 'src/graphql.generated.ts'),
  //   outputAs: 'class',
  // },
});
