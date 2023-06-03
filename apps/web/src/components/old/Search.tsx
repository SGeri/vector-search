"use client";

import { useState } from "react";
import search from "@/server/actions/search";
import { Document } from "@packages/types";

export default function Search() {
  const [prompt, setPrompt] = useState("");
  const [generative, setGenerative] = useState(false);

  const [response, setResponse] = useState("");
  const [documents, setDocuments] = useState<Document[]>([]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="text-md text-center font-medium">Search</h2>

        <input
          type="text"
          placeholder="Search in documents..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2"
        />

        <div className="flex flex-row gap-2">
          <p>Generative answer</p>
          <input
            type="checkbox"
            checked={generative}
            onChange={(e) => setGenerative(e.target.checked)}
            className="w-6 rounded-md border border-gray-300 p-1"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="rounded-md border border-gray-300 p-2"
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {loading && <p>Loading...</p>}

        {response && (
          <div>
            <h2 className="text-md font-medium">Generated Response:</h2>
            <p>{response}</p>
          </div>
        )}

        {documents.length > 0 && (
          <div>
            <h2 className="text-md font-medium">Related Documents:</h2>

            <ul className="flex list-inside list-disc flex-col">
              {documents.map((document) => (
                <li key={document.id}>
                  <strong>{document.title}: </strong>
                  {document.certainty}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
