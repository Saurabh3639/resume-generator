"use client";

import React, { useState } from "react";
import Image from "next/image";
import TitleComponent from "../TitleComponent";
import TemplatePreviewModal from "../TemplatePreviewModal";
import { cvTemplates, resumeTemplates } from "../Template/TemplatesData";

export default function ChooseTemplatePhase({ category }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };

  const closeModal = () => {
    setSelectedTemplate(null);
  };

  // Determine the templates to display based on category
  const templates =
    category === "create-a-resume"
      ? resumeTemplates
      : category == "create-a-cover-letter"
      ? cvTemplates
      : [];

  return (
    <div className="w-[80%]">
      {category == "create-a-resume" ? (
        <TitleComponent
          heading={"Choose Resume Template"}
          subheading={
            "Select a resume template that you feel will best showcase your skills and qualifications."
          }
        />
      ) : category == "create-a-cover-letter" ? (
        <TitleComponent
          heading={"Cover Letter Templates"}
          subheading={"Select a cover later template that you feel will best."}
        />
      ) : null}

      <div>
        <div className="grid grid-cols-4 gap-2 justify-items-center">
          {templates.map((template, index) => {
            return (
              <div
                key={index}
                className="border border-[#FFA6AA] rounded-lg p-2 w-fit"
              >
                <Image
                  src={
                    category == "create-a-resume"
                      ? "/images/resume_template_image.svg"
                      : category == "create-a-cover-letter"
                      ? "/images/cv_template_image.svg"
                      : null
                  }
                  className=""
                  width="200"
                  height="160"
                  alt=""
                />
                <h4 className="text-base font-medium">{template.name}</h4>
                <p className="text-xs font-normal text-[#757575]">
                  Chosen By 200 Users
                </p>
                <div className="w-full text-center mt-2">
                  <button
                    onClick={() => handleTemplateClick(template)}
                    className="border border-[#FFA6AA] rounded-lg px-3 py-1"
                  >
                    Select
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center my-4">
          <button className="border border-primary rounded-lg px-3 py-1">
            View All
          </button>
        </div>
      </div>

      <hr className="my-6 border border-[#C7C7C7]" />

      {selectedTemplate && (
        <TemplatePreviewModal
          category={category}
          template={selectedTemplate}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
