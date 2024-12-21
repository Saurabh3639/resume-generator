import React from "react";

export default function TimelineResumeTemplate({ resumeData }) {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="mb-8 flex items-start">
        <img
          src={resumeData.photoUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover inline-block border-4 border-[#6F73D2]"
        />
        <div className="text-center w-full">
          <h1 className="text-3xl font-bold text-[#6F73D2] mt-4">
            {resumeData.fullName}
          </h1>
          <p className="text-gray-600 mt-2">
            {resumeData.contact} | {resumeData.email}
          </p>
          <p className="text-gray-600">
            {resumeData.city}, {resumeData.country} - {resumeData.pincode}
          </p>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#6F73D2] mb-4 pb-2">
          Profile Summary
        </h2>
        <p className="text-gray-700 text-sm">{resumeData.summary}</p>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#6F73D2] mb-4 pb-2">
          Education
        </h2>
        {resumeData.educations.map((edu) => (
          <div key={edu.id} className="mb-4">
            <h3 className="text-lg font-bold text-gray-800">
              {edu.instituteName}
            </h3>
            <p className="text-gray-600 text-sm">{edu.instituteLocation}</p>
            <p className="text-gray-600 text-sm">
              {edu.instituteCourse} | {edu.instituteDuration}{" "}
              {edu.isPursuing ? "(Currently Pursuing)" : ""}
            </p>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#6F73D2] mb-4 pb-2">
          Experience
        </h2>
        <div className="relative pl-6">
          {resumeData.experiences.map((exp, index) => {
            return (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">{exp.jobTitle}</h3>
                <p className="text-gray-600 text-sm">
                  {exp.companyName}, {exp.companyLocation}
                </p>
                <p className="text-gray-600 text-sm">
                  {exp.jobStartDate} -{" "}
                  {exp.isCurrentlyWorking ? "Present" : exp.jobEndDate}
                </p>
                <p className="text-gray-700 text-sm">{exp.jobDetails}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#6F73D2] mb-4 pb-2">
          Projects
        </h2>
        <div className="pl-6">
          {resumeData.projects.map((proj, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">{proj.projectTitle}</h3>
              <p className="text-gray-600 text-sm">
                {proj.projectStartDate} -{" "}
                {proj.isInProgress ? "In Progress" : proj.projectEndDate}
              </p>
              <p className="text-gray-700 text-sm">{proj.projectDescription}</p>
              {proj.hostedUrl && (
                <p className="text-sm">
                  Hosted:{" "}
                  <a
                    href={proj.hostedUrl}
                    className="text-blue-500 underline"
                    target="_blank"
                  >
                    {proj.hostedUrl}
                  </a>
                </p>
              )}
              {proj.codeUrl && (
                <p className="text-sm">
                  Code:{" "}
                  <a
                    href={proj.codeUrl}
                    className="text-blue-500 underline"
                    target="_blank"
                  >
                    {proj.codeUrl}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#6F73D2] mb-4 pb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-300 text-gray-800 rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#6F73D2] mb-4 pb-2">
          Certifications
        </h2>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {resumeData.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      {/* Languages Known Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#6F73D2] mb-4 pb-2">
          Languages Known
        </h2>
        <p className="text-gray-700 text-sm">{resumeData.languagesKnown}</p>
      </div>

      {/* Co-Curricular Activities Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#6F73D2] mb-4 pb-2">
          Co-Curricular Activities
        </h2>
        <p className="text-gray-700 text-sm">{resumeData.activities}</p>
      </div>
    </div>
  );
}
