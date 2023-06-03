import { RawDocument } from "@packages/types";

import { weaviate } from "../client";
import { generateSearchQuery } from "../graphql/queries";
import processDocuments from "../utils/processDocument";

export default async function search(prompt: string, generative: boolean) {
  const query = generateSearchQuery(prompt, generative);

  const queryResult = await weaviate.graphql.raw().withQuery(query).do();
  const processResult = await processDocuments(
    queryResult.data.Get.Document as RawDocument[],
  );

  return processResult;
}
