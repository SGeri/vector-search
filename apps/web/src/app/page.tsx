import Uploader from "@/components/Uploader";
import Viewer from "@/components/Viewer";
import getDocuments from "@/server/queries/getDocuments";

export default async function Home() {
  const documents = await getDocuments();

  return (
    <main className="p-28">
      <h1 className="text-center text-lg font-bold">Hello World!</h1>

      <Viewer documents={documents} />

      <Uploader />
    </main>
  );
}
