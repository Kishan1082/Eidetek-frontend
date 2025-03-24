"use client";
import * as React from "react";
import FormInput from "./FormInput";

function UploadArea({ onUpload, selectedFiles }) {
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center">
        <svg
          width="445"
          height="427"
          viewBox="0 0 445 427"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[445px] h-auto"
        >
          <rect
            width="445"
            height="427"
            rx="4"
            fill="#E5E5E9"
            fillOpacity="0.52"
          ></rect>
          <rect
            x="0.5"
            y="0.5"
            width="444"
            height="426"
            rx="3.5"
            stroke="#B9B9B9"
            strokeOpacity="0.3"
            strokeDasharray="5 5"
          ></rect>
          <text
            fill="#0F0F0F"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Mulish"
            fontSize="16"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="117.148" y="248.04">
              Drag &amp; drop files or
            </tspan>
          </text>
          <a href="#" onClick={onUpload}>
            <text
              fill="#0F0F0F"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Mulish"
              fontSize="16"
              fontWeight="bold"
              letterSpacing="0em"
              textDecoration="underline"
            >
              <tspan x="270.586" y="248.04">Browse</tspan>
            </text>
          </a>
          <text
            fill="#676767"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Mulish"
            fontSize="12"
            letterSpacing="0em"
          >
            <tspan x="36.0957" y="277.53">
              Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
            </tspan>
          </text>
        </svg>
        {selectedFiles.length > 0 && (
          <ul className="mt-3 text-sm text-stone-700">
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function UploadButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm font-bold text-white uppercase rounded-md cursor-pointer bg-stone-950 h-[45px] w-[445px] max-md:w-full max-md:max-w-[445px]"
      aria-label="Upload files"
    >
      UPLOAD FILES
    </button>
  );
}

function UploadInput() {
  const [documentType, setDocumentType] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [relation, setRelation] = React.useState("");
  const [selectedFiles, setSelectedFiles] = React.useState([]); // Added state for selectedFiles
  const [error, setError] = React.useState(null);

  const handleUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = false;
    input.click();
    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      console.log("Selected files:", files);
      setSelectedFiles(files);
    };
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://10.0.0.165:5000/ocr/upload", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          document_type: documentType,
          question,
          relationship:relation,
          file: selectedFiles[0], // Send file names
        }),
      });

      const data = await response.json();
      if (data.success) {
        console.log(data);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Failed to upload");
    }
  };

  return (
    <section className="relative p-10 bg-white rounded shadow-[0_6px_8px_rgba(0,0,0,0.05)] w-[540px] z-[1] max-md:p-8 max-md:max-w-[540px] max-md:w-[90%] max-sm:p-5">
      <h2 className="mb-5 text-2xl font-bold text-center text-stone-950 max-sm:text-xl">Upload</h2>
      <div className="flex flex-col gap-3 items-center w-full">
        <UploadArea onUpload={handleUpload} selectedFiles={selectedFiles}/>
        <FormInput
          label="Document Type"
          type="text"
          placeholder="e.g. ID, passport, etc."
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
        />
        <FormInput
          label="Question"
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <FormInput
          label="Relation"
          type="text"
          placeholder="Enter relation"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
        />
        <UploadButton onClick={handleSubmit} />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </section>
  );
}

export default UploadInput;
