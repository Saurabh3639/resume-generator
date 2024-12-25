import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { cvData, resumeData } from "./StudentData";
import jsPDF from "jspdf";

export default function TemplatePreviewModal({
  category,
  template,
  closeModal,
}) {
  const downloadPdf = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    const pdfContent = document.getElementById("resume-preview");
    doc.html(pdfContent, {
      callback: (doc) => {
        // Conditionally set the filename based on the category
        const fileName =
          category == "create-a-resume"
            ? `${resumeData.fullName}-resume.pdf`
            : `${cvData.fullName}-cv.pdf`;

        doc.save(fileName);
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg h-[80%] w-[60%] overflow-scroll scrollbar-hide">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{template.name} (Preview)</h2>
          <AiOutlineClose
            className="text-xl cursor-pointer"
            onClick={closeModal}
          />
        </div>

        {/* Render the resume preview */}
        <div id="resume-preview">
          {category == "create-a-resume" ? (
            <template.component resumeData={resumeData} />
          ) : category == "create-a-cover-letter" ? (
            <template.component cvData={cvData} />
          ) : null}
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="bg-primary text-white px-4 py-2 rounded"
            onClick={downloadPdf}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
