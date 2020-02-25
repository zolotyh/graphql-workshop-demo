import { GraphQLModule } from '@nestjs/graphql';
// import * as path from 'path';

export const GraphQLModuleForRoot = GraphQLModule.forRoot({
    installSubscriptionHandlers: true,
  // 🥇 code-first approach
  autoSchemaFile: 'schema.graphql',
  // buildSchemaOptions: {
    // // see https://github.com/MichalLytek/type-graphql/blob/master/src/schema/build-context.ts#L16
    // nullableByDefault: true,
  // } as any,
  // 🥈 schema-first approach
  // typePaths: ['./**/*.graphql'],
  // definitions: {
  //   path: path.join(process.cwd(), 'src/graphql.generated.ts'),
  //   outputAs: 'class',
  // },
});
