"use server";

import { searchDocument } from "@packages/weaviate";

export default async function search(prompt: string, generative: boolean) {
  const res = await searchDocument(prompt, generative);

  return res;
}
