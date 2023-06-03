"use client";

import { useRef, useState } from "react";
import uploadDocument from "@/server/actions/uploadDocument";

export default function Uploader() {
  const ref = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("Example Document Title");
  const [file, setFile] = useState<File>();

  const handleSubmit = async () => {
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();
    const bufferString = Buffer.from(arrayBuffer).toString("base64");

    uploadDocument(title, file.type, bufferString);
  };

  return (
    <div>
      <input
        ref={ref}
        hidden
        type="file"
        onChange={({ target }) => {
          if (target.files) {
            const file = target.files[0];
            setFile(file);
          }
        }}
      />

      <h2 className="text-md text-center font-medium">Uploader</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <strong>Title:</strong>

          <input
            type="text"
            placeholder=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <div>
          <p>
            <strong>File:</strong> {file?.name || "None"}
          </p>

          <div className="flex flex-row gap-2">
            <button
              onClick={() => ref.current?.click()}
              className="rounded-md border border-gray-300 p-2"
            >
              Select File
            </button>
            <button
              onClick={handleSubmit}
              className="rounded-md border border-gray-300 p-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
