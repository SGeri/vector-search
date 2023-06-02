"use server";

import {
  addDocument,
  deleteDocument,
  searchDocument,
} from "@packages/weaviate";

async function upload(file: File) {
  /*await addDocument(
    "Test1",
    "The solution is about building new machine that can productively create new instances of chocolate.",
  );
  await addDocument(
    "Test2",
    "This article is about producing candy from artifical substances. First of all, how do I those substances?",
  );*/

  const res = await searchDocument("chocolate");

  console.log(res.data.Get);
}

export { upload };
