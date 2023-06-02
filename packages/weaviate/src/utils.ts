import { weaviate } from "./client";
import { className } from "./schema";

async function addDocument(title: string, body: string) {
  await weaviate.data
    .creator()
    .withClassName(className)
    .withProperties({ title, body })
    .do();
}

async function searchDocument(input: string) {
  const result = await weaviate.graphql
    .get()
    .withClassName(className)
    .withFields("title")
    .withNearText({
      concepts: [input],
    })
    .do();

  return result;
}

async function deleteDocument(id: string) {
  await weaviate.data.deleter().withClassName(className).withId(id).do();
}

export { addDocument, searchDocument, deleteDocument };
