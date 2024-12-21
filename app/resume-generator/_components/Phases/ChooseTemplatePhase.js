"use client";

import React, { useState } from "react";
import Image from "next/image";
import TitleComponent from "../TitleComponent";
import TemplatePreviewModal from "../TemplatePreviewModal";
import ClassicResumeTemplate from "../Template/ClassicResumeTemplate";
import CreativeResumeTemplate from "../Template/CreativeResumeTemplate";
import TimelineResumeTemplate from "../Template/TimelineResumeTemplate";

export default function ChooseTemplatePhase({ category }) {
  const templates = [
    { id: 1, name: "Classic Resume", component: ClassicResumeTemplate },
    { id: 2, name: "Creative Resume", component: CreativeResumeTemplate },
    { id: 3, name: "Timeline Resume", component: TimelineResumeTemplate },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };

  const closeModal = () => {
    setSelectedTemplate(null);
  };

  return (
    <div>
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
                  src="/images/template_image.svg"
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

      <div className="py-4 flex items-center justify-end gap-6">
        <button className="underline text-sm font-normal">Back</button>
        <button className="px-5 py-1 text-primary text-base font-medium border border-primary rounded-lg">
          Preview
        </button>
        <button className="px-5 py-1 bg-primary text-base font-medium text-white rounded-lg">
          Save & Download
        </button>
      </div>

      {selectedTemplate && (
        <TemplatePreviewModal
          template={selectedTemplate}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
