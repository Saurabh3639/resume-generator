"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";

export default function SkillsPhase() {
  const [skillsData, setSkillsData] = useState({
    jobTitle: "",
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkillsData({
      ...skillsData,
      [name]: value,
    });
  };

  console.log("skillsData", skillsData);

  return (
    <div>
      <TitleComponent
        heading={"Skills"}
        subheading={
          "Employers scan skills for relevant keywords. We’ll help you choose the best ones."
        }
      />

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Search for pre-written examples based on specific job titles. *
          </label>
          <input
            type="text"
            name={"jobTitle"}
            id={`jobTitle`}
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={skillsData.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div>&nbsp;</div>
        <hr className="my-4 border border-[#C7C7C7] col-span-2" />
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Skills in Your Resume *
          </label>
          <div className="w-full px-2 py-1 border border-[#808080] rounded text-sm font-normal">
            <p>Skill 1</p>
            <p>Skill 2</p>
          </div>
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Showing examples *
          </label>
          <input
            type="search"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
          />
          <div className="w-full px-2 py-1 border border-[#808080] rounded text-sm font-normal my-3">
            <p>Skill 1</p>
            <p>Skill 2</p>
          </div>
        </div>
        <hr className="my-4 border border-[#C7C7C7] col-span-2" />
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
