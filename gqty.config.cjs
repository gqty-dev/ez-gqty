/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "http://localhost:3000/api/graphql",
    headers: {},
  },
  destination: "./src/gqty/index.ts",
};

module.exports = config;
