import { getDocuments as _getDocuments } from "@packages/weaviate";

export default async function getDocuments() {
  return await _getDocuments({
    offset: 0,
    limit: 0,
  });
}
