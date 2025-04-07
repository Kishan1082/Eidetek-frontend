import React, { useState } from "react";
import FormInput from "./FormInput";
import Logo from "./Logo";
import UploadIcon from "../../assets/Upload icon.svg";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/landing-page-2");
  };

  return (
    <button
          className="self-end text-stone-600 hover:underline "
          onClick={handleClick}
        >Back
        </button>
  );
}

function UploadArea({ onUpload, selectedFiles }) {
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center">
      <div className="relative">
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
  <img
    className="absolute top-10 left-30 w-45 h-40"
    alt="Vector"
    src={UploadIcon}
  />
</div>
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

function UploadButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`all-[unset] box-border flex w-[445px] h-[45px] items-center justify-center gap-2.5 px-3.5 py-[9px] relative rounded-md transition-opacity duration-200 ${
        loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#0e0e0e]'
      }`}
      aria-label="Upload files"
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"
            ></path>
          </svg>
          <span className="text-white text-sm font-bold">Uploading...</span>
        </div>
      ) : (
        <div className="relative w-fit [font-family:'Mulish-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-[18px] whitespace-nowrap">
          Submit
        </div>
      )}
    </button>
  );
}


function UploadInput() {
  const [documentType, setDocumentType] = React.useState("");
  const [questions, setQuestions] = React.useState([""]);
  const [relation, setRelation] = React.useState("");
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [documentId, setDocumentId] = React.useState(null);
  const [extractedData, setExtractedData] = React.useState({}); 
  const [editableData, setEditableData] = React.useState({});
  const [relationship, setRelationship] = React.useState("");
  const [document_type, setDocument_type] = React.useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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

  const handleQuestionChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = value;
      return updatedQuestions;
    });
  };

  const addQuestion = () => {
    setQuestions((prevQuestions) => [...prevQuestions, ""]);
  };

  const removeQuestion = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (questions.length === 0 || questions.some((q) => q.trim() === "")) {
      setError("Please enter at least one question.");
      return;
    }

    const formData = new FormData();
    formData.append("document_type", documentType);
    // formData.append("questions", JSON.stringify(questions));
    questions.forEach((question) => {
      formData.append('questions', question);
    });
    formData.append("relationship", relation);
    formData.append("file", selectedFiles[0]);

    setLoading(true); 

    try {
      const response = await fetch("http://10.0.0.165:5000/ocr/upload", {
        method: "POST",
        credentials: "include",
        headers: { "Authorization": "Bearer " + localStorage.getItem("token") },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Upload successful!", data);
        setDocumentId(data.document_id);
        setExtractedData(data.extracted_data);
        setEditableData(data.extracted_data);
        setRelationship(data.relationship);
        setDocument_type(data.document_type);
      } else {
        setError(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to upload");
    } finally {
      setLoading(false); 
    }
  };

  const handleEditableChange = (key, e) => {
    setEditableData((prevData) => ({
      ...prevData,
      [key]: e.target.value,
    }));
  };

  const handleSaveEdits = async () => {
    console.log(editableData);
    if (!documentId) {
      setError("No document ID found");
      return;
    }

    try {
      const response = await fetch("http://10.0.0.165:5000/docs/store", {
        method: "POST",
        credentials: "include",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          document_id: documentId,
          final_data: editableData,
          relationship: relationship
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Edited data submitted successfully:", data.message);
        alert("Upload successful!");
        navigate("/chatbot");
      } else {
        setError(data.error || "Submission failed");
      }
    } catch (error) {
      setError("Failed to submit edited text");
    }
  };

  return (
    <main className="flex overflow-hidden flex-col items-center px-14 py-16 bg-white max-md:px-5">
    <div className="flex items-center justify-between w-full max-w-[910px]">
    <Logo />
    <BackButton />
  </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <section className="relative p-10 bg-white rounded shadow-[0_6px_8px_rgba(0,0,0,0.05)] w-[540px] z-[1] max-md:p-8 max-md:max-w-[540px] max-md:w-[90%] max-sm:p-5">
          <h2 className="mb-5 text-2xl font-bold text-center text-stone-950 max-sm:text-xl">Upload</h2>
          <div className="flex flex-col gap-3 items-center w-full">
            <UploadArea onUpload={handleUpload} selectedFiles={selectedFiles} />
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
              label="Relation: "
              type="select"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
            >
              <option value="">Select relation</option>
              <option value="myself">Myself</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Spouse">Wife</option>
              <option value="Husband">Husband</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Friend">Friend</option>
            </FormInput>
            <br />
            <div>
              {questions.map((q, index) => (
                <div key={index} className="mb-2 flex items-center gap-2">
                <FormInput
                  label={`Question ${index + 1}: `}
                  type="text"
                  placeholder="Enter your question"
                  value={q}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                  className="flex-1" // add this class to make the input take up the remaining space
                />
                <button
                  type="button"
                  onClick={() => removeQuestion(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  X
                </button>
              </div>
              ))}
              <button
                type="button"
                onClick={addQuestion}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                + Add Question
              </button>
            </div>
            <br />
            
            <UploadButton onClick={handleSubmit}  loading={loading}/>
            <br />
            {Object.keys(extractedData).length > 0 && (
              <div className="mt-5">
                <label className="block text-lg font-semibold">Extracted Data:</label>
                {Object.keys(extractedData).map((key, index) => (
                  <div key={index} className="mb-3">
                    <label className="block font-semibold">
                      {`Answer to ${key}`}
                    </label>
                    <input
                      type="text"
                      value={editableData[key] || extractedData[key]}
                      onChange={(e) => handleEditableChange(key, e)}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                ))}
                <button
                  onClick={handleSaveEdits}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </section>
      </div>
    </main>
  );
}

export default UploadInput;
