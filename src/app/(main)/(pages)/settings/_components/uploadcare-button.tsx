"use client";
import React from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "@uploadcare/react-uploader/core.css";

type Props = {
  onUpload: (e: string) => any;
};

// Create a dynamically imported uploader component
const FileUploaderRegular = dynamic(
  () =>
    import("@uploadcare/react-uploader/next").then(
      (mod) => mod.FileUploaderRegular
    ),
  { ssr: false }
);

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();

  const handleUploadComplete = async (info: { cdnUrl: string }) => {
    if (info?.cdnUrl) {
      const file = await onUpload(info.cdnUrl);
      if (file) {
        router.refresh();
      }
    }
  };

  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="bb573090899f86cab461"
        onFileUploadSuccess={handleUploadComplete}
      />
    </div>
  );
};

export default UploadCareButton;
