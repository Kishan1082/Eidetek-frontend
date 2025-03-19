"use client";
import * as React from "react";

function UploadArea({ onUpload }) {
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
            <tspan x="270.586" y="248.04">
              Browse
            </tspan>
          </text>
          <text
            fill="#676767"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Mulish"
            fontSize="12"
            letterSpacing="0em"
          >
            <tspan x="36.0957" y="277.53">
              Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
            </tspan>
          </text>
          <path
            d="M224.028 159.746L224.121 159.773L224.125 159.769C224.562 159.848 224.996 159.586 225.125 159.152C226.297 155.215 229.988 152.465 234.1 152.465C234.587 152.465 234.982 152.07 234.982 151.583C234.982 151.096 234.587 150.702 234.1 150.702C229.046 150.702 224.799 154.067 223.435 158.649C223.296 159.116 223.562 159.607 224.028 159.746Z"
            fill="#0F0F0F"
            stroke="#F9FFF9"
            strokeWidth="0.3"
          ></path>
          <path
            d="M244.344 187.438H239.953C239.549 187.438 239.222 187.111 239.222 186.707C239.222 186.303 239.549 185.975 239.953 185.975H244.344C250.396 185.975 255.32 181.051 255.32 174.999C255.32 168.947 250.396 164.023 244.344 164.023H244.238C244.026 164.023 243.824 163.931 243.685 163.771C243.546 163.61 243.483 163.397 243.514 163.187C243.579 162.732 243.612 162.274 243.612 161.828C243.612 156.583 239.344 152.315 234.099 152.315C232.059 152.315 230.113 152.953 228.472 154.16C228.111 154.425 227.599 154.307 227.39 153.91C222.742 145.06 210.602 143.871 204.308 151.571C201.657 154.814 200.615 159.034 201.45 163.146C201.542 163.6 201.194 164.024 200.733 164.024H200.439C194.388 164.024 189.464 168.948 189.464 175C189.464 181.051 194.388 185.976 200.439 185.976H204.83C205.234 185.976 205.562 186.303 205.562 186.707C205.562 187.111 205.234 187.439 204.83 187.439H200.439C193.581 187.439 188 181.858 188 175C188 168.333 193.272 162.874 199.865 162.573C199.246 158.307 200.43 154.003 203.175 150.644C209.914 142.4 222.828 143.324 228.287 152.517C230.029 151.425 232.022 150.852 234.099 150.852C240.454 150.852 245.489 156.261 245.049 162.58C251.581 162.946 256.783 168.376 256.783 174.999C256.783 181.858 251.202 187.438 244.343 187.438L244.344 187.438Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M203.85 186.293C203.85 196.463 212.124 204.737 222.293 204.737C232.463 204.737 240.737 196.463 240.737 186.293C240.737 176.124 232.463 167.85 222.293 167.85C212.124 167.85 203.85 176.124 203.85 186.293ZM205.614 186.293C205.614 177.097 213.096 169.614 222.293 169.614C231.49 169.614 238.973 177.096 238.973 186.293C238.973 195.49 231.49 202.973 222.293 202.973C213.097 202.973 205.614 195.491 205.614 186.293Z"
            fill="#0F0F0F"
            stroke="#F9FFF9"
            strokeWidth="0.3"
          ></path>
          <path
            d="M221.942 193.658C221.942 194.036 222.249 194.343 222.628 194.343C223.007 194.343 223.314 194.037 223.314 193.658V179.729C223.314 179.351 223.007 179.043 222.628 179.043C222.249 179.043 221.942 179.351 221.942 179.729V193.658Z"
            fill="#0F0F0F"
            stroke="#0F0F0F"
            strokeWidth="0.3"
          ></path>
          <path
            d="M222.628 180.7L218.827 184.501L222.628 180.7ZM222.628 180.7L226.429 184.501C226.562 184.635 226.738 184.702 226.913 184.702L222.628 180.7ZM217.857 184.501C218.125 184.769 218.559 184.769 218.827 184.501L226.914 184.702C227.088 184.702 227.264 184.635 227.398 184.501C227.666 184.233 227.666 183.799 227.398 183.531L223.113 179.246C222.845 178.978 222.411 178.978 222.143 179.246C222.143 179.246 222.143 179.246 222.143 179.246L217.857 183.531C217.589 183.799 217.589 184.233 217.857 184.501Z"
            fill="#0F0F0F"
            stroke="#0F0F0F"
            strokeWidth="0.3"
          ></path>
        </svg>
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
  const handleUpload = () => {
    // This would be implemented to handle file selection
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.click();

    input.onchange = (e) => {
      // Handle the selected files
      const files = e.target.files;
      console.log("Selected files:", files);
      // Additional file handling logic would go here
    };
  };

  return (
    <section className="relative p-10 bg-white rounded shadow-[0_6px_8px_rgba(0,0,0,0.05)] w-[540px] z-[1] max-md:p-8 max-md:max-w-[540px] max-md:w-[90%] max-sm:p-5">
      <h2 className="mb-5 text-2xl font-bold text-center text-stone-950 max-sm:text-xl">
        Upload
      </h2>
      <div className="flex flex-col gap-5 items-center">
        <UploadArea onUpload={handleUpload} />
        <UploadButton onClick={handleUpload} />
      </div>
    </section>
  );
}

export default UploadInput;