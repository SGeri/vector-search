import { weaviate } from "../client";
import { className } from "../schema";

export default async function deleteDocument(id: string) {
  await weaviate.data.deleter().withClassName(className).withId(id).do();
}
