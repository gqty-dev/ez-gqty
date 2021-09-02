import { inspectWriteGenerate } from "@gqty/cli";
import { CreateApp, gql } from "@graphql-ez/nextjs";
import { ezCodegen } from "@graphql-ez/plugin-codegen";
import { ezGraphiQLIDE } from "@graphql-ez/plugin-graphiql";
import { ezSchema } from "@graphql-ez/plugin-schema";

const { buildApp } = CreateApp({
  ez: {
    plugins: [
      ezCodegen({
        outputSchema: true,
      }),
      ezGraphiQLIDE({
        defaultQuery: "query { hello }",
      }),
      ezSchema({
        schema: {
          typeDefs: gql`
            type Query {
              hello: String!
            }
          `,
          resolvers: {
            Query: {
              hello() {
                return "Hello World";
              },
            },
          },
        },
      }),
    ],
  },
});

export default buildApp().apiHandler;

inspectWriteGenerate({
  endpoint: "http://localhost:3000/api/graphql",
}).catch(console.error);
