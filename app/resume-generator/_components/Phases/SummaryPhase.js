"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import { resumeData } from "../StudentData";
import { askFelixBot } from "@/utility/askFelixBot";

export default function SummaryPhase() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("summary :", summary);

  const onGenerate = async () => {
    setLoading(true);

    const inputPrompt = `
Based on the following resume data, write a concise and professional profile summary for a resume that highlights the individual's strengths, skills, achievements, and career aspirations. The summary should be impactful, limited to 2-3 sentences, and suitable for inclusion in a professional resume.

Resume Data:
- Full Name: ${resumeData.fullName || "Not provided"}
- Contact: ${resumeData.contact || "Not provided"}
- Email: ${resumeData.email || "Not provided"}
- Location: ${resumeData.city || "Not provided"}, ${resumeData.country || "Not provided"}
- Pincode: ${resumeData.pincode || "Not provided"}
- Languages Known: ${resumeData.languagesKnown || "Not provided"}
- Social Links:
  - LinkedIn: ${resumeData.linkedInUrl || "Not provided"}
  - GitHub: ${resumeData.githubUrl || "Not provided"}
  - Personal Website: ${resumeData.personalWebsiteUrl || "Not provided"}
- Education: ${resumeData.educations
  .map(
    (edu) =>
      `\n  - ${edu.instituteName}, ${edu.instituteLocation}, ${edu.instituteCourse} (${edu.instituteDuration}${edu.isPursuing ? ", Currently Pursuing" : ""})`
  )
  .join("")}
- Experience: ${resumeData.experiences
  .map(
    (exp) =>
      `\n  - ${exp.jobTitle} at ${exp.companyName}, ${exp.companyLocation} (${exp.jobStartDate} to ${
        exp.isCurrentlyWorking ? "Present" : exp.jobEndDate || "Not provided"
      }) - ${exp.jobDetails}`
  )
  .join("")}
- Projects: ${resumeData.projects
  .map(
    (proj) =>
      `\n  - ${proj.projectTitle} (${proj.projectStartDate} to ${
        proj.isInProgress ? "In Progress" : proj.projectEndDate || "Not provided"
      }): ${proj.projectDescription}`
  )
  .join("")}
- Skills: ${resumeData.skills.join(", ") || "Not provided"}
- Certifications: ${resumeData.certifications.join(", ") || "Not provided"}
- Activities: ${resumeData.activities.join("\n  - ") || "Not provided"}
- Summary: ${resumeData.summary || "Not provided"}

Ensure the generated profile summary effectively summarizes the individual's profile and aligns with professional resume standards.`;


    const response = await askFelixBot(inputPrompt);

    if (response) {
      setSummary(response);
    } else {
      console.error("Failed to generate data");
    }
    setLoading(false);
  };

  return (
    <div>
      <TitleComponent
        heading={"Summary"}
        subheading={
          "Provide a brief overview of your career goals, skills, and achievements to make a great first impression."
        }
      />

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
        <div className="col-span-2 relative">
          <label className="block text-[#252525] text-base font-medium mb-1">
            Write a Short Profile Summary for Your Resume
          </label>
          <textarea
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            name={"summary"}
            id={"summary"}
            cols="30"
            rows="6"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
          <button
            onClick={onGenerate}
            className="absolute bottom-3 right-3 rounded-lg border border-primary text-xs font-medium text-primary py-1 px-3"
          >
            {loading ? "Thinking..." : "Ask Felix"}
          </button>
        </div>
        <hr className="my-4 border border-[#C7C7C7] col-span-2" />
      </div>
    </div>
  );
}
