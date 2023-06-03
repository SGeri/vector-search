import { type Document } from "@packages/types";

type RawDocument = {
  title: string;
  body: string;
  _additional: {
    id: string;
  };
};

export default async function processDocument(
  rawDocuments: RawDocument[],
): Promise<Document[]> {
  const processedDocuments = rawDocuments.map((doc) => ({
    id: doc._additional.id,
    title: doc.title,
    body: doc.body,
  }));

  return processedDocuments;
}
