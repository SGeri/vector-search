import { getDocuments } from "@packages/weaviate";

// todo fix name
export default async function _getDocuments() {
  const result = await getDocuments({
    offset: 0,
    limit: 100,
  });

  return result;
}
