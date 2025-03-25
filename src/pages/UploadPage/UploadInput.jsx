"use client";
import * as React from "react";
import FormInput from "./FormInput";
import UploadIcon from "../../assets/Upload icon.svg";

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
          <rect width="445" height="427" rx="4" fill="#E5E5E9" fillOpacity="0.52"></rect>
          <rect x="0.5" y="0.5" width="444" height="426" rx="3.5" stroke="#B9B9B9" strokeOpacity="0.3" strokeDasharray="5 5"></rect>
          <img className="absolute w-3 h-[9px] top-1.5 left-[35px]" alt="Vector" src={UploadIcon} />
          <text fill="#0F0F0F" fontFamily="Mulish" fontSize="16" fontWeight="bold">
            <tspan x="117.148" y="248.04">Drag &amp; drop files or</tspan>
          </text>
          <a href="#" onClick={onUpload}>
            <text fill="#0F0F0F" fontFamily="Mulish" fontSize="16" fontWeight="bold" textDecoration="underline">
              <tspan x="270.586" y="248.04">Browse</tspan>
            </text>
          </a>
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

function UploadButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="w-full h-10 bg-black text-white font-bold rounded-md mt-3"
    >
      {label}
    </button>
  );
}

function UploadInput() {
  const [documentType, setDocumentType] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [relation, setRelation] = React.useState("");
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [documentId, setDocumentId] = React.useState("");
  const [extractedData, setExtractedData] = React.useState({}); // Store extracted key-value pairs

  const handleUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = false;
    input.click();

    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFiles.length === 0 || !selectedFiles[0]) {
      setError("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("document_type", documentType);
    formData.append("questions", question);
    formData.append("relationship", relation);
    formData.append("file", selectedFiles[0]);

    try {
      const response = await fetch("http://10.0.0.165:5000/ocr/upload", {
        method: "POST",
        credentials: "include",
        headers: { "Authorization": "Bearer " + localStorage.getItem("token") },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setDocumentId(data.document_id); // Store document ID
        setExtractedData(data.extracted_data || {}); // Store extracted key-value pairs
      } else {
        setError(data.error || "Upload failed");
      }
    } catch (error) {
      setError("Failed to upload");
    }
  };

  const handleEditChange = (key, value) => {
    setExtractedData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleTextEditSubmit = async () => {
    console.log(extractedData);
    try {
      const response = await fetch("http://10.0.0.165:5000/document/store", {
        method: "POST",
        credentials: "include",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ document_id: documentId, final_data: extractedData }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Edited data submitted successfully:", data.message);
      } else {
        setError(data.error || "Submission failed");
      }
    } catch (error) {
      setError("Failed to submit edited text");
    }
  };

  return (
    <section className="p-6 bg-white rounded shadow-lg w-[540px] max-w-full">
      <h2 className="mb-5 text-2xl font-bold text-center">Upload</h2>
      <div className="flex flex-col gap-3 items-center w-full">
        <UploadArea onUpload={handleUpload} selectedFiles={selectedFiles} />
        <FormInput label="Document Type:" type="text" placeholder="e.g. ID, passport, etc." value={documentType} onChange={(e) => setDocumentType(e.target.value)} />
        <FormInput label="Questions:" type="text" placeholder="Enter your question" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <FormInput label="Relation:" type="text" placeholder="Enter relation" value={relation} onChange={(e) => setRelation(e.target.value)} />
        <UploadButton onClick={handleSubmit} label="UPLOAD FILES" />

        {Object.keys(extractedData).length > 0 && (
          <div className="w-full mt-5">
            <h3 className="text-lg font-bold mb-2">Edit Extracted Data:</h3>
            {Object.entries(extractedData).map(([key, value]) => (
              <div key={key} className="mb-2">
                <label className="block text-sm font-medium text-gray-700">{key}</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={value}
                  onChange={(e) => handleEditChange(key, e.target.value)}
                />
              </div>
            ))}
            <UploadButton onClick={handleTextEditSubmit} label="SUBMIT EDITED DATA" />
          </div>
        )}

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </section>
  );
}

export default UploadInput;
