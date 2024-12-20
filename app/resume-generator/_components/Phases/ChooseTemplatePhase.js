"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import TemplatePreviewModal from "../TemplatePreviewModal";
import ResumeTemplate1 from "../Template/ResumeTemplate1";
import ResumeTemplate2 from "../Template/ResumeTemplate2";
import ResumeTemplate3 from "../Template/ResumeTemplate3";

export default function ChooseTemplatePhase() {
  const templates = [
    { id: 1, name: "Template 1", component: ResumeTemplate1 },
    { id: 2, name: "Template 2", component: ResumeTemplate2 },
    { id: 3, name: "Template 3", component: ResumeTemplate3 },
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
      <TitleComponent
        heading={"Cover Letter Templates"}
        subheading={"Select a cover later template that you feel will best."}
      />

      <div>
        <div className="grid grid-cols-4 gap-3">
          {templates.map((template, index) => {
            return (
              <div
                key={index}
                className="border border-[#FFA6AA] rounded-lg p-2"
              >
                <div>Image</div>
                <h4 className="text-base font-medium">{template.name}</h4>
                <p className="text-xs font-normal text-[#757575]">
                  Chosen By 200 Users
                </p>
                <button onClick={() => handleTemplateClick(template)}>
                  Select
                </button>
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
