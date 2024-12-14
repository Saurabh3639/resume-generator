"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import { TextElement } from "../FormElements";
import { FaRegSquarePlus } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";

export default function EducationPhase() {
  const [formData, setFormData] = useState({
    instituteName: "",
    instituteLocation: "",
    instituteCourse: "",
    instituteDuration: "",
    isPursuing: false,
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
        heading={"Education"}
        subheading={
          "Tell us about your education, even if you're still a student."
        }
      />

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
        <TextElement
          labelName={"University/Institute *"}
          inputName={"instituteName"}
          inputId={"instituteName"}
          inputValue={formData.instituteName}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Location *"}
          inputName={"instituteLocation"}
          inputId={"instituteLocation"}
          inputValue={formData.instituteLocation}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Course *"}
          inputName={"instituteCourse"}
          inputId={"instituteCourse"}
          inputValue={formData.instituteCourse}
          onChange={handleChange}
        />
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Course Duration (Or Expected Duration) *
          </label>
          <input
            type="month"
            name="instituteDuration"
            id="instituteDuration"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.instituteDuration}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="text-[rgb(37,37,37)] text-base font-medium">
            Currently Pursuing
          </label>
          <input
            type="checkbox"
            name="isPursuing"
            id="isPursuing"
            className="w-5 h-5 bg-green-600 border border-[#808080] focus:outline-none"
            value={formData.isPursuing}
            onChange={handleChange}
          />
        </div>

        <hr className="my-4 border border-[#C7C7C7] col-span-2" />
      </div>

      <div className="text-base font-medium text-[#414141]">
        <CiSquarePlus className="inline text-primary text-2xl cursor-pointer" />{" "}
        Add any additional coursework you're proud to showcase
      </div>
    </div>
  );
}
