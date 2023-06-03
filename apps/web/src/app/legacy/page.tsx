import Search from "@/components/old/Search";
import Uploader from "@/components/old/Uploader";
import Viewer from "@/components/old/Viewer";
import getDocuments from "@/server/queries/getDocuments";

export default async function () {
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
