"use client";

import { FormEventHandler, useState } from "react";
import Image from "next/image";
import Loader from "@/components/Loader";
import search from "@/server/actions/search";
import { Document } from "@packages/types";

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [generative, setGenerative] = useState(false);

  const [response, setResponse] = useState("");
  const [documents, setDocuments] = useState<Document[]>([]);

  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!prompt) return;

    setResponse("");
    setDocuments([]);

    setLoading(true);

    const { response, processedDocuments } = await search(prompt, generative);

    setResponse(response);
    setDocuments(processedDocuments);

    setLoading(false);
  };

  return (
    <main className="h-screen w-screen">
      <form
        className="my-24 mb-32 flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-2 flex h-16 w-[40%] flex-row items-center rounded-2xl border border-black bg-white bg-opacity-80 px-4 py-2 text-black shadow-lg">
          <Image
            src="/search.png"
            alt="Search Icon"
            width={16}
            height={16}
            className="mx-2"
          />

          <input
            type="text"
            className="h-full w-full bg-transparent text-lg focus:outline-none"
            placeholder="Search..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-2">
          <p>Generative answer</p>
          <input
            type="checkbox"
            checked={generative}
            onChange={(e) => setGenerative(e.target.checked)}
            className="w-6 rounded-md border border-gray-300 p-1"
          />
        </div>
      </form>

      {(documents.length > 0 || loading) && (
        <div className="flex items-center justify-center text-black">
          <div className="min-h-[300px] w-[75%] rounded-t-lg bg-white px-16 py-4 shadow-2xl">
            {loading && (
              <div className="flex items-center justify-center">
                <Loader />
                <h2 className="text-center text-xl font-medium">
                  Generating answer and loading resources...
                </h2>
              </div>
            )}

            {!loading && (
              <>
                <h2 className="text-center text-xl font-medium">
                  Generative Answer
                </h2>

                <p className="mb-6 px-32 text-center text-sm">
                  {response || "No response was generated."}
                </p>

                <h3 className="mb-8 text-center text-xl font-medium">
                  Related Resources
                </h3>

                <div className="grid grid-cols-2 grid-rows-3 gap-4 px-10">
                  {documents.map((document) => (
                    <DocumentPreview key={document.id} title={document.title} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

type DocumentProps = {
  title: string;
};

// Adjust the DocumentPreview
function DocumentPreview({ title }: DocumentProps) {
  return (
    <div className="mb-4 flex flex-row items-center gap-2">
      <Image
        src="/word_icon.png"
        alt="Document Type Logo"
        width={64}
        height={64}
      />

      <div className="flex flex-col">
        <p className="font-medium">{title}</p>
        <ul className="list-inside list-disc text-sm">
          <li>Date: 2023. 04. 16.</li>
          <li>Source: base knowledge</li>
          <li>
            People:{" "}
            <span className="cursor-pointer text-blue-600 underline">
              George
            </span>
            {", "}
            <span className="text-blue-600 underline">Mike</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
