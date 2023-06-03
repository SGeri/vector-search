import Weaviate from "weaviate-ts-client";

const weaviate = Weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

export { weaviate };
