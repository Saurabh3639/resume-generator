"use client";

import React, { useEffect, useState } from "react";
import TitleComponent from "../TitleComponent";
import SkillList from "../SkillList";
import { LuSearch } from "react-icons/lu";
import { askFelixBot } from "@/utility/askFelixBot";

const initialFormData = {
  jobTitle: "",
  skills: [],
};

export default function SkillsPhase() {
  const [skillsData, setSkillsData] = useState(initialFormData);
  const [relatedSkills, setRelatedSkills] = useState([]);

  console.log("skillsData", skillsData);

  // Function to Add skill to my skills and Remove skill from related skills
  const addToSkills = (skill) => {
    setSkillsData({
      ...skillsData,
      skills: [...skillsData.skills, skill],
    });

    setRelatedSkills((prevSkills) =>
      prevSkills.filter((cval) => cval !== skill)
    );
  };

  // Function to Remove skill from my skills and Add skill to related skills
  const removeFromSkills = (skill) => {
    setSkillsData({
      ...skillsData,
      skills: skillsData.skills.filter((cval) => cval !== skill),
    });

    setRelatedSkills((prevSkills) => [...prevSkills, skill]);
  };

  const onGenerate = async () => {
    const inputPrompt = `Based on the job title "${
      skillsData.jobTitle || "Not provided"
    }", generate an array of relevant technical and soft skills that are essential for this role. Include a diverse set of skills such as programming languages, frameworks, tools, and interpersonal skills that would help the individual excel in this role.
      The output should be in the following JSON format:
      [ "Skill 1", "Skill 2", "Skill 3", ...]
      Ensure the array of skills aligns with industry standards and best practices for the given job title.`;

    const response = await askFelixBot(inputPrompt);

    if (response) {
      setRelatedSkills(
        JSON.parse(response.replace("```json", "").replace("```", ""))
      );
    } else {
      console.error("Failed to generate data");
    }
  };

  useEffect(() => {
    if (skillsData?.jobTitle?.length > 0) {
      onGenerate();
    } else {
      setRelatedSkills([]);
    }
  }, [skillsData?.jobTitle]);

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
            placeholder="e.g. Software Developer"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={skillsData.jobTitle}
            onChange={(e) =>
              setSkillsData({ ...skillsData, jobTitle: e.target.value })
            }
          />
        </div>
        <div>&nbsp;</div>
        <hr className="my-4 border border-[#C7C7C7] col-span-2" />
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Skills in Your Resume *
          </label>
          <SkillList
            skills={skillsData?.skills}
            onAction={removeFromSkills}
            actionType="remove"
          />
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Showing examples *
          </label>
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full ps-8 pe-2 py-1 border border-[#808080] rounded-md focus:outline-none text-sm font-normal"
            />
            <LuSearch className="absolute top-[0.3rem] left-[0.3rem] text-xl text-[#808080]" />
          </div>
          <SkillList
            skills={relatedSkills}
            onAction={addToSkills}
            actionType="add"
          />
        </div>
        <hr className="my-4 border border-[#C7C7C7] col-span-2" />
      </div>
    </div>
  );
}
