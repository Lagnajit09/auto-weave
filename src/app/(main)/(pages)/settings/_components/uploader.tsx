"use client";

import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";

export function Uploader() {
  return (
    <FileUploaderRegular
      sourceList="local, url, camera, dropbox"
      classNameUploader="uc-light"
      pubkey="bb573090899f86cab461"
    />
  );
}
