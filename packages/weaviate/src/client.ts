import Weaviate from "weaviate-ts-client";

import { className, schema } from "./schema";

const weaviate = Weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

async function addSchema() {
  const schemaExists = await weaviate.schema
    .classGetter()
    .withClassName(className)
    .do();

  if (schemaExists) return;

  await weaviate.schema.classCreator().withClass(schema).do();
}

addSchema();

export { weaviate };
