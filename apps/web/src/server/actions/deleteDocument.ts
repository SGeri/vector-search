"use server";

import { revalidatePath } from "next/cache";
import { deleteDocument } from "@packages/weaviate";

export default async function uploadDocument(id: string) {
  await deleteDocument(id);

  revalidatePath("/");
}
