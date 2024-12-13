"use client";

import React, { useState } from "react";

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
      <h3 className="text-3xl font-bold text-[#262626] mb-4">
        Company Details.
      </h3>

      <p className="text-sm font-normal text-[#414141] mb-4">
        * Please provide company information.
      </p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Enter Your Job Title *
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Enter Your Current Experience *
          </label>
          <input
            type="text"
            name="currentExp"
            id="currentExp"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.currentExp}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            name="companyLocation"
            id="companyLocation"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.companyLocation}
            onChange={handleChange}
          />
        </div>
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
