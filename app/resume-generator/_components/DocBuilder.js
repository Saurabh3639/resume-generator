"use client";

import React, { useState } from "react";
import GeneralPhase from "./Phases/GeneralPhase";
import AboutJobPhase from "./Phases/AboutJobPhase";
import ChooseTemplatePhase from "./Phases/ChooseTemplatePhase";

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
  const [selectedPhase, setSelectedPhase] = useState("General");
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);

  const renderPhaseComponent = (category) => {
    switch (selectedPhase) {
      case "General":
        return <GeneralPhase category={category} />;
      case "Social Links":
        return <p>Add your social media profiles and links here.</p>;
      case "Education":
        return <p>Provide your education background here.</p>;
      case "Experience":
        return <p>List your professional experience here.</p>;
      case "Projects":
        return <p>Describe your key projects here.</p>;
      case "Skills":
        return <p>Add your skills here.</p>;
      case "Co-Curricular":
        return <p>Mention your co-curricular activities here.</p>;
      case "About Job":
        return <AboutJobPhase />;
      case "Choose Template":
        return <ChooseTemplatePhase />;
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
