"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import { CiSquarePlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function ProjectsPhase() {
  const [projectsData, setProjectsData] = useState([
    {
      id: 1,
      projectTitle: "",
      codeUrl: "",
      hostedUrl: "",
      projectStartDate: "",
      projectEndDate: "",
      projectDescription: "",
      isInProgress: false,
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedProjects = [...projectsData];

    if (name === "isInProgress") {
      updatedProjects[index].isInProgress = checked;
      // Set projectEndDate to an empty string if currently working is true
      if (checked) {
        updatedProjects[index].projectEndDate = "";
      }
    } else {
      updatedProjects[index][name] = type === "checkbox" ? checked : value;
    }

    setProjectsData(updatedProjects);
  };

  const addProjectSection = () => {
    setProjectsData([
      ...projectsData,
      {
        id: projectsData?.length + 1, // Dynamically calculate the next index
        projectTitle: "",
        codeUrl: "",
        hostedUrl: "",
        projectStartDate: "",
        projectEndDate: "",
        projectDescription: "",
        isInProgress: false,
      },
    ]);
  };

  const removeProjectSection = (indexToRemove) => {
    const updatedProjects = projectsData
      .filter((_, i) => i !== indexToRemove) // Remove the selected section
      .map((project, idx) => ({
        ...project,
        id: idx + 1, // Reassign indexes to maintain sequence
      }));
    setProjectsData(updatedProjects);
  };

  console.log("projectsData :", JSON.stringify(projectsData));

  return (
    <div>
      <TitleComponent
        heading={"Projects"}
        subheading={
          "Please share your most impressive projects for consideration for your resume."
        }
      />

      {/* Add Projects section */}
      {projectsData?.map((project, index) => (
        <div key={index} className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
          <div className="col-span-2 text-base font-medium text-[#252525]">
            {project.id}
            {")"}
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Project Title *
            </label>
            <input
              type="text"
              name={"projectTitle"}
              id={`projectTitle-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={project.projectTitle}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>&nbsp;</div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Code URL*
            </label>
            <input
              type="text"
              name={"codeUrl"}
              id={`codeUrl-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={project.codeUrl}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Hosted URL *
            </label>
            <input
              type="text"
              name={"hostedUrl"}
              id={`hostedUrl-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={project.hostedUrl}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Start Date
            </label>
            <input
              type="month"
              name="projectStartDate"
              id={`projectStartDate-${index}`}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={project.projectStartDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              End Date
            </label>
            <input
              type="month"
              name="projectEndDate"
              id={`projectEndDate-${index}`}
              className={`w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal ${
                project.isInProgress && "cursor-not-allowed"
              }`}
              value={project.projectEndDate}
              onChange={(e) => handleChange(index, e)}
              disabled={project.isInProgress} // Disable if currently in progress
            />
          </div>
          <div className="col-span-2 relative">
            <label className="block text-[#252525] text-base font-medium mb-1">
              Description *
            </label>
            <textarea
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              name={"projectDescription"}
              id={`projectDescription-${index}`}
              cols="30"
              rows="6"
              value={project.projectDescription}
              onChange={(e) => handleChange(index, e)}
            ></textarea>
            <button className="absolute bottom-3 right-3 rounded-lg border border-primary text-xs font-medium text-primary py-1 px-3">
              Ask Felix
            </button>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-[#252525] text-base font-medium">
              Currently In Progress
            </label>
            <input
              type="checkbox"
              name="isInProgress"
              id={`isInProgress-${index}`}
              className="w-5 h-5 bg-green-600 border border-[#808080] focus:outline-none"
              checked={project.isInProgress} // Used `checked` for checkboxes
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            {projectsData?.length > 1 && (
              <button
                type="button"
                className="text-base font-medium text-primary"
                onClick={() => removeProjectSection(index)}
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
          onClick={addProjectSection}
          className="inline text-primary text-2xl cursor-pointer"
        />{" "}
        Add More Project
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
