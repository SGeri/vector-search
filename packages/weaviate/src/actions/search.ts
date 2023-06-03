import { weaviate } from "../client";
import { className } from "../schema";

export default async function searchDocument(input: string) {
  const result = await weaviate.graphql
    .get()
    .withClassName(className)
    .withFields("title body")
    .withNearText({
      concepts: [input],
    })
    .do();

  return result;
}
