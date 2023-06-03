"use client";

import deleteDocument from "@/server/actions/deleteDocument";
import { type Document } from "@packages/types";

type Props = {
  documents: Document[];
};

export default function Viewer({ documents }: Props) {
  const handleView = async (document: Document) => {
    alert(document.body);
  };

  const handleDelete = async (document: Document) => {
    deleteDocument(document.id);
  };

  return (
    <div>
      <h2 className="text-md text-center font-medium">Viewer</h2>

      <ul className="flex flex-col">
        {documents.map((document) => (
          <li key={document.title} className="pb-4">
            <p>
              <strong>{document.title}</strong>: {document.body.slice(0, 200)}
              ...
            </p>
            <div className="flex flex-row gap-2">
              <button
                onClick={() => handleView(document)}
                className="rounded-md border border-gray-300 p-1"
              >
                View
              </button>
              <button
                onClick={() => handleDelete(document)}
                className="rounded-md border border-gray-300 p-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
