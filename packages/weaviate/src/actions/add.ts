import { weaviate } from "../client";
import { className } from "../schema";

export default async function addDocument(title: string, body: string) {
  const document = await weaviate.data
    .creator()
    .withClassName(className)
    .withProperties({ title, body })
    .do();

  return document;
}
