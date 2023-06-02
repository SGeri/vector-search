"use client";

import { useState } from "react";

import { upload } from "./action";

export default function Component() {
  const [file, setFile] = useState<File>();

  const handleClick = async () => {
    if (!file) return;

    upload(file);
  };

  return (
    <div>
      <h1>Component</h1>

      <input
        type="file"
        onChange={({ target }) => {
          if (target.files) {
            const file = target.files[0];
            setFile(file);
          }
        }}
      />

      <button onClick={handleClick}>Upload</button>
    </div>
  );
}
