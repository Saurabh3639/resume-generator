"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import { TextElement } from "../FormElements";

export default function AboutJobPhase() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    currentExp: "",
    companyName: "",
    companyLocation: "",
    jobDescription: "",
    coverLetterSample: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log("formData", formData);
  return (
    <div>
      <TitleComponent
        heading={"Company Details"}
        subheading={"* Please provide company information."}
      />

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
        <TextElement
          labelName={"Enter Your Job Title *"}
          inputName={"jobTitle"}
          inputId={"jobTitle"}
          inputValue={formData.jobTitle}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Enter Your Current Experience *"}
          inputName={"currentExp"}
          inputId={"currentExp"}
          inputValue={formData.currentExp}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Company Name"}
          inputName={"companyName"}
          inputId={"companyName"}
          inputValue={formData.companyName}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Location"}
          inputName={"companyLocation"}
          inputId={"companyLocation"}
          inputValue={formData.companyLocation}
          onChange={handleChange}
        />

        <div className="col-span-2">
          <label className="block text-[#252525] text-base font-medium mb-1">
            Upload Job Description Here
          </label>
          <textarea
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            name="jobDescription"
            id="jobDescription"
            cols="30"
            rows="10"
            value={formData.jobDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-span-2 text-end">
          <button className="px-5 py-1 text-primary text-base font-medium border border-primary rounded-lg">
            Generate
          </button>
        </div>

        <hr className="my-4 border border-[#C7C7C7] col-span-2" />
        
        <div className="col-span-2">
          <label className="block text-[#252525] text-base font-medium mb-1 col-span-2">
            Cover Letter Sample
          </label>
          <textarea
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            name="coverLetterSample"
            id="coverLetterSample"
            cols="30"
            rows="10"
            value={formData.coverLetterSample}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className="py-4 flex items-center justify-end gap-6">
        <button className="underline text-sm font-normal">Back</button>
        <button className="px-5 py-1 text-primary text-base font-medium border border-primary rounded-lg">
          Preview
        </button>
        <button className="px-5 py-1 bg-primary text-base font-medium text-white rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
}
