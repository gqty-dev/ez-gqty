import { useGenerateGQty } from "@gqty/cli/envelop";
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
  envelop: {
    plugins: [useGenerateGQty()],
  },
});

export default buildApp().apiHandler;
