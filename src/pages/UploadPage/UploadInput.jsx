"use client";
import * as React from "react";
import FormInput from "./FormInput";
import UploadIcon from "../../assets/Upload icon.svg"

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
          <img
            className="absolute w-3 h-[9px] top-1.5 left-[35px]"
            alt="Vector"
            src={UploadIcon}
          />
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
            fontFamily="Mulish"
            fontSize="12"
            letterSpacing="0em"
            textAnchor="middle"
            x="222.5"
            y="277" 
          >
          <tspan>Supported formats: JPEG, PNG, PDF, Word, PPT</tspan>
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
      className="all-[unset] box-border flex w-[445px] h-[45px] items-center justify-center gap-2.5 px-3.5 py-[9px] relative bg-[#0e0e0e] rounded-md"
      aria-label="Upload files"
    >
    <div className="relative w-fit [font-family:'Mulish-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-[18px] whitespace-nowrap">
      UPLOAD FILES
    </div>
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
    console.log(selectedFiles);
    if (selectedFiles.length === 0 || !selectedFiles[0]) {
      setError("No file selected");
      return;
    }
  
    const formData = new FormData();
    formData.append("document_type", documentType);
    formData.append("questions", question);
    formData.append("relationship", relation);
    formData.append("file", selectedFiles[0]); // Append the file correctly
    
    
    try {
      const response = await fetch("http://10.0.0.165:5000/ocr/upload", {
        method: "POST",
        credentials: "include",
        headers: { "Authorization": "Bearer " + localStorage.getItem("token")},
        body: formData, 
      });
    
      const data = await response.json(); // Extract JSON from response
      
      console.log(data);
      if (response.ok) {
        console.log("Success:", data.message); // Display success message
      } else {
        setError(data.error || "Upload failed"); // Handle errors from API
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to upload");
    }
  };
  
  return (
    <section className="relative p-10 bg-white rounded shadow-[0_6px_8px_rgba(0,0,0,0.05)] w-[540px] z-[1] max-md:p-8 max-md:max-w-[540px] max-md:w-[90%] max-sm:p-5">
      <h2 className="mb-5 text-2xl font-bold text-center text-stone-950 max-sm:text-xl">Upload</h2>
      <div className="flex flex-col gap-3 items-center w-full">
        <UploadArea onUpload={handleUpload} selectedFiles={selectedFiles}/>
        <br />
        <FormInput
          label="Document Type: "
          type="text"
          placeholder="e.g. ID, passport, etc."
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
        />
        <br />
        <FormInput
          label="Questions: "
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <br />
        <FormInput
          label="Relation: "
          type="text"
          placeholder="Enter relation"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
        />
        <br />
        <UploadButton onClick={handleSubmit} />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </section>
  );
}

export default UploadInput;
