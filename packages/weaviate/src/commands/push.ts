import { weaviate } from "../client";
import { className, schema } from "../schema";

async function main() {
  try {
    const currentSchema = await weaviate.schema
      .classGetter()
      .withClassName(className)
      .do();

    if (currentSchema)
      await weaviate.schema.classDeleter().withClassName(className).do();
  } catch (err) {
    console.log("> Error while deleting old schema:", err);
  }

  await weaviate.schema.classCreator().withClass(schema).do();
}

main()
  .then(() => console.log("> Successfully created new schema"))
  .catch((err) => console.log("> Error while running command:", err));
