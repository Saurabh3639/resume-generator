"use client";

import React, { useState } from "react";
import GeneralPhase from "./Phases/GeneralPhase";
import AboutJobPhase from "./Phases/AboutJobPhase";
import ChooseTemplatePhase from "./Phases/ChooseTemplatePhase";
import EducationPhase from "./Phases/EducationPhase";
import ExperiencePhase from "./Phases/ExperiencePhase";
import SkillsPhase from "./Phases/SkillsPhase";
import ProjectsPhase from "./Phases/ProjectsPhase";
import CocurricularPhase from "./Phases/CocurricularPhase";
import SocialLinksPhase from "./Phases/SocialLinksPhase";

const CategoriesData = [
  {
    id: 1,
    category: "create-a-resume",
    phases: [
      "General",
      "Social Links",
      "Education",
      "Experience",
      "Projects",
      "Skills",
      "Co-Curricular",
      "Choose Template",
    ],
  },
  {
    id: 2,
    category: "create-a-cover-letter",
    phases: ["General", "About Job", "Choose Template"],
  },
];

export default function DocBuilder({ title, category }) {
  const [selectedPhase, setSelectedPhase] = useState("Choose Template");
  // const [selectedPhase, setSelectedPhase] = useState("General");
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);

  const renderPhaseComponent = (category) => {
    switch (selectedPhase) {
      case "General":
        return <GeneralPhase category={category} />;
      case "Social Links":
        return <SocialLinksPhase />;
      case "Education":
        return <EducationPhase />;
      case "Experience":
        return <ExperiencePhase />;
      case "Projects":
        return <ProjectsPhase />;
      case "Skills":
        return <SkillsPhase />;
      case "Co-Curricular":
        return <CocurricularPhase />;
      case "About Job":
        return <AboutJobPhase />;
      case "Choose Template":
        return <ChooseTemplatePhase category={category} />;
      default:
        return <p>Select a phase to start.</p>;
    }
  };

  // Find the category in the CategoriesData
  const matchedCategory = CategoriesData.find(
    (data) => data.category == category
  );

  if (!matchedCategory) {
    return (
      <div className="px-6 py-4 font-semibold text-xl">
        No Such Category Available
      </div>
    );
  }

  const totalPhases = matchedCategory.phases.length;
  const progressPercentage =
    (selectedPhaseIndex == 0 ? 0 : selectedPhaseIndex / totalPhases) * 100;

  return (
    <div className="px-6 py-4">
      {/* Block 1 - Title and Progress*/}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="flex items-center justify-center gap-2">
          <div className="font-medium text-sm">Progress</div>
          <div className="w-[12rem] bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="font-medium text-sm">
            {Math.round(progressPercentage) || 0}%
          </div>
        </div>
      </div>

      {/* Block 2 - Phases */}
      <div className="w-full bg-red-50 rounded-lg flex items-center justify-start overflow-scroll scrollbar-hide px-4 py-2 text-base font-medium mb-4">
        {matchedCategory.phases.map((phase, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedPhase(phase);
              setSelectedPhaseIndex(index);
            }}
            className={`cursor-pointer px-4 py-2 rounded-lg text-nowrap ${
              selectedPhase == phase ? "bg-primary text-white" : ""
            }`}
          >
            {phase}
          </div>
        ))}
      </div>

      <div>{renderPhaseComponent(category)}</div>
    </div>
  );
}
