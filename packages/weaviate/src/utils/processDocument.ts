import { type Document, type RawDocument } from "@packages/types";

type Result = {
  response: string;
  processedDocuments: Document[];
};

export default async function processDocuments(
  rawDocuments: RawDocument[],
): Promise<Result> {
  const response = rawDocuments[0]._additional.generate?.groupedResult || "";

  const processedDocuments = rawDocuments.map((doc) => ({
    id: doc._additional.id,
    certainty: doc._additional.certainty,
    title: doc.title,
    body: doc.body,
  }));

  return { response, processedDocuments };
}
