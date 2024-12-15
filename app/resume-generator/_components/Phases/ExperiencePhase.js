"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import { CiSquarePlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function ExperiencePhase() {
  const [experiencesData, setExperiencesData] = useState([
    {
      id: 1,
      companyName: "",
      companyLocation: "",
      jobTitle: "",
      jobExperience: "",
      jobStartDate: "",
      jobEndDate: "",
      jobDetails: "",
      isCurrentlyWorking: false,
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedExperiences = [...experiencesData];
    // updatedExperiences[index][name] = type == "checkbox" ? checked : value;

    if (name === "isCurrentlyWorking") {
      updatedExperiences[index].isCurrentlyWorking = checked;
      // Set jobEndDate to an empty string if currently working is true
      if (checked) {
        updatedExperiences[index].jobEndDate = "";
      }
    } else {
      updatedExperiences[index][name] = type === "checkbox" ? checked : value;
    }

    setExperiencesData(updatedExperiences);
  };

  const addExperienceSection = () => {
    setExperiencesData([
      ...experiencesData,
      {
        id: experiencesData?.length + 1, // Dynamically calculate the next index
        companyName: "",
        companyLocation: "",
        jobTitle: "",
        jobExperience: "",
        jobStartDate: "",
        jobEndDate: "",
        jobDetails: "",
        isCurrentlyWorking: false,
      },
    ]);
  };

  const removeExperienceSection = (indexToRemove) => {
    const updatedExperiences = experiencesData
      .filter((_, i) => i !== indexToRemove) // Remove the selected section
      .map((experience, idx) => ({
        ...experience,
        id: idx + 1, // Reassign indexes to maintain sequence
      }));
    setExperiencesData(updatedExperiences);
  };

  console.log("experiencesData :", JSON.stringify(experiencesData));

  return (
    <div>
      <TitleComponent
        heading={"Experience"}
        subheading={
          "List your work experience, starting with your most recent position."
        }
      />

      {/* Add Experience section */}
      {experiencesData?.map((experience, index) => (
        <div key={index} className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
          <div className="col-span-2 text-base font-medium text-[#252525]">
            {experience.id}
            {")"}
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Company Name *
            </label>
            <input
              type="text"
              name={"companyName"}
              id={`companyName-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={experience.companyName}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Location *
            </label>
            <input
              type="text"
              name={"companyLocation"}
              id={`companyLocation-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={experience.companyLocation}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Job Title *
            </label>
            <input
              type="text"
              name={"jobTitle"}
              id={`jobTitle-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={experience.jobTitle}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Job Experience *
            </label>
            <input
              type="text"
              name={"jobExperience"}
              id={`jobExperience-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={experience.jobExperience}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Start Date
            </label>
            <input
              type="month"
              name="jobStartDate"
              id={`jobStartDate-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={experience.jobStartDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              End Date
            </label>
            <input
              type="month"
              name="jobEndDate"
              id={`jobEndDate-${index}`}
              className={`w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal ${
                experience.isCurrentlyWorking && "cursor-not-allowed"
              }`}
              value={experience.jobEndDate}
              onChange={(e) => handleChange(index, e)}
              disabled={experience.isCurrentlyWorking} // Disable if currently working
            />
          </div>
          <div className="col-span-2 relative">
            <label className="block text-[#252525] text-base font-medium mb-1">
              Previous Role Details *
            </label>
            <textarea
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              name={"jobDetails"}
              id={`jobDetails-${index}`}
              cols="30"
              rows="6"
              value={experience.jobDetails}
              onChange={(e) => handleChange(index, e)}
            ></textarea>
            <button className="absolute bottom-3 right-3 rounded-lg border border-primary text-xs font-medium text-primary py-1 px-3">
              Ask Felix
            </button>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-[#252525] text-base font-medium">
              I Currently Work Here
            </label>
            <input
              type="checkbox"
              name="isCurrentlyWorking"
              id={`isCurrentlyWorking-${index}`}
              className="w-5 h-5 bg-green-600 border border-[#808080] focus:outline-none"
              checked={experience.isCurrentlyWorking} // Used `checked` for checkboxes
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            {experiencesData?.length > 1 && (
              <button
                type="button"
                className="text-base font-medium text-primary"
                onClick={() => removeExperienceSection(index)}
              >
                <IoClose className="inline me-1 text-xl" />
                Remove
              </button>
            )}
          </div>
          <hr className="my-4 border border-[#C7C7C7] col-span-2" />
        </div>
      ))}

      <div className="text-base font-medium text-[#414141] mb-4">
        <CiSquarePlus
          onClick={addExperienceSection}
          className="inline text-primary text-2xl cursor-pointer"
        />{" "}
        Add more Experience
      </div>
    </div>
  );
}
