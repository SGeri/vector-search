export default async function Page() {
  return (
    <main className="h-full w-full text-center text-white">
      <div className="flex h-full w-full flex-col items-center justify-center  sm:px-12 md:px-32 lg:px-40 xl:px-80">
        <h1 className="mb-4 text-2xl font-bold">Vector Search</h1>
        <p className="text-lg">
          Vector Search is an advanced search engine that utilizes machine
          learning techniques for querying and creating generative answers from
          large volumes of documents. It operates on document embeddings,
          enabling semantic search rather than simple keyword matching. Vector
          Search also leverages transformer-based language models to synthesize
          human-readable responses, offering sophisticated understanding and
          summarization of queried information. This technology enhances the
          effectiveness of data discovery and knowledge extraction across
          various fields.
        </p>
      </div>
    </main>
  );
}
