import React, { useState, useCallback, useEffect } from "react";
import { Cloud, Loader2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
export default function FileUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
      handleUpload(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/*": [],
    },
  });

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    // Simulate an upload delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsUploading(false);
    console.log("File uploaded:", file.name);
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const uploadOverlay = (
    <div className="absolute inset-0 flex flex-col items-center overflow-hidden justify-center border border-[#24A0B5]/50 bg-black/30 text-white opacity-0 transition-opacity group-hover:opacity-100 max-w-[240px] h-[240px]">
      <Cloud className="h-6 w-6 mb-2" />
      <p className="text-center text-sm px-4">
        {isDragActive
          ? "Drop to replace"
          : isUploading
          ? "Uploading..."
          : "Click or drag to replace"}
      </p>
    </div>
  );

  return (
    <div
      {...getRootProps()}
      className="relative w-full mx-auto rounded-[32px] overflow-hidden group cursor-pointer max-w-[240px] h-[240px]"
    >
      <input {...getInputProps()} />
      {file ? (
        <>
          <img
            src={preview || "/placeholder.svg"}
            alt="Uploaded file"
            className="object-cover w-full h-full"
          />
          {uploadOverlay}
        </>
      ) : (
        <div className="max-w-[240px] h-[240px]  flex flex-col items-center overflow-hidden justify-center bg-[#0E464F] border border-[#24A0B5]/50 text-white">
          {isUploading ? (
            <Loader2 className="h-6 w-6 animate-spin mb-2" />
          ) : (
            <Cloud className="h-6 w-6 mb-2" />
          )}
          <p className="text-center text-sm px-4">
            {isDragActive
              ? "Drop it here"
              : isUploading
              ? "Uploading..."
              : "Drag & Drop or Click to Upload"}
          </p>
        </div>
      )}
    </div>
  );
}

/***
 * 
 * 

box-sizing: border-box;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 24px;
gap: 16px;

width: 240px;
height: 240px;

background: #0E464F;
border: 4px solid rgba(36, 160, 181, 0.5);
border-radius: 32px;

flex: none;
order: 0;
flex-grow: 0;

 */
