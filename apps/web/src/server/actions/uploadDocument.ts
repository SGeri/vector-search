"use server";

import { revalidatePath } from "next/cache";
import { extractText } from "@packages/extractor";
import { addDocument } from "@packages/weaviate";

export default async function uploadDocument(
  title: string,
  fileType: string,
  bufferString: string,
) {
  const buffer = Buffer.from(bufferString, "base64");
  const content = await extractText(fileType, buffer);

  const document = await addDocument(title, content);

  revalidatePath("/");

  return document;
}
