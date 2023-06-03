import { weaviate } from "../client";
import { className } from "../schema";
import processDocument from "../utils/processDocument";

const fields = "title body _additional { id }";

type Pagination = {
  offset: number;
  limit: number;
};

export default async function getDocuments({ offset, limit }: Pagination) {
  const result = await weaviate.graphql
    .get()
    .withClassName(className)
    .withFields(fields)
    .withOffset(offset || 0)
    .withLimit(limit || 100)
    .do();

  return processDocument(result.data.Get.Document);
}
