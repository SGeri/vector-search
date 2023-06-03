import Search from "@/components/Search";
import Uploader from "@/components/Uploader";
import Viewer from "@/components/Viewer";
import getDocuments from "@/server/queries/getDocuments";

export default async function Home() {
  const documents = await getDocuments();

  return (
    <main className="px-28 py-4">
      <h1 className="text-center text-lg font-bold">Hello World!</h1>

      <Viewer documents={documents} />

      <Uploader />

      <Search />
    </main>
  );
}
