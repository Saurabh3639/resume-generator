"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import { CiSquarePlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function EducationPhase() {
  const [educationsData, setEducationsData] = useState([
    {
      id: 1,
      instituteName: "",
      instituteLocation: "",
      instituteCourse: "",
      instituteDuration: "",
      isPursuing: false,
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedEducations = [...educationsData];
    updatedEducations[index][name] = type == "checkbox" ? checked : value;
    setEducationsData(updatedEducations);
  };

  const addEducationSection = () => {
    setEducationsData([
      ...educationsData,
      {
        id: educationsData?.length + 1, // Dynamically calculate the next index
        instituteName: "",
        instituteLocation: "",
        instituteCourse: "",
        instituteDuration: "",
        isPursuing: false,
      },
    ]);
  };

  const removeEducationSection = (indexToRemove) => {
    const updatedEducations = educationsData
      .filter((_, i) => i !== indexToRemove) // Remove the selected section
      .map((education, idx) => ({
        ...education,
        id: idx + 1, // Reassign indexes to maintain sequence
      }));
    setEducationsData(updatedEducations);
  };

  console.log("educationsData :", JSON.stringify(educationsData));

  return (
    <div>
      <TitleComponent
        heading={"Education"}
        subheading={
          "Tell us about your education, even if you're still a student."
        }
      />

      {/* Add Education section */}
      {educationsData?.map((education, index) => (
        <div key={index} className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
          <div className="col-span-2 text-base font-medium text-[#252525]">
            {education.id}
            {")"}
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              University/Institute *
            </label>
            <input
              type="text"
              name={"instituteName"}
              id={`instituteName-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={education.instituteName}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Location *
            </label>
            <input
              type="text"
              name={"instituteLocation"}
              id={`instituteLocation-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={education.instituteLocation}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Course *
            </label>
            <input
              type="text"
              name={"instituteCourse"}
              id={`instituteCourse-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={education.instituteCourse}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Course Duration (Or Expected Duration) *
            </label>
            <input
              type="month"
              name="instituteDuration"
              id={`instituteDuration-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={education.instituteDuration}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="text-[rgb(37,37,37)] text-base font-medium">
              Currently Pursuing
            </label>
            <input
              type="checkbox"
              name="isPursuing"
              id={`isPursuing-${index}`}
              className="w-5 h-5 bg-green-600 border border-[#808080] focus:outline-none"
              checked={education.isPursuing} // Used `checked` for checkboxes
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            {educationsData?.length > 1 && (
              <button
                type="button"
                className="text-base font-medium text-primary"
                onClick={() => removeEducationSection(index)}
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
          onClick={addEducationSection}
          className="inline text-primary text-2xl cursor-pointer"
        />{" "}
        Add any additional coursework you're proud to showcase
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
