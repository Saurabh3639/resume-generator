import React from "react";

export default function CreativeResumeTemplate({ resumeData }) {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between bg-[#73937E] text-white rounded-md px-6 py-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">{resumeData.fullName}</h1>
          <p className="mt-1">
            {resumeData.contact} | {resumeData.email}
          </p>
          <p>
            {resumeData.city}, {resumeData.country} - {resumeData.pincode}
          </p>
        </div>
        <img
          src={resumeData.photoUrl}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-white"
        />
      </div>

      {/* Profile Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#73937E] mb-2">
          Profile Summary
        </h2>
        <p className="bg-gray-100 p-4 rounded-md shadow-inner text-gray-700 text-sm">
          {resumeData.summary}
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#73937E] mb-2">Education</h2>
        {resumeData.educations.map((edu, index) => (
          <div
            key={edu.id}
            className={`p-4 rounded-md shadow-md ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            <h3 className="text-lg font-medium">{edu.instituteName}</h3>
            <p className="text-sm text-gray-700">
              {edu.instituteCourse} | {edu.instituteLocation}
            </p>
            <p className="text-sm">
              {edu.instituteDuration}{" "}
              {edu.isPursuing ? "(Currently Pursuing)" : ""}
            </p>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#73937E] mb-2">
          Experience
        </h2>
        {resumeData.experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`p-4 rounded-md shadow-md ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            <h3 className="text-lg font-medium">{exp.jobTitle}</h3>
            <p className="text-sm text-gray-700">
              {exp.companyName} | {exp.companyLocation}
            </p>
            <p className="text-sm">
              {exp.jobStartDate} -{" "}
              {exp.isCurrentlyWorking ? "Present" : exp.jobEndDate}
            </p>
            <p className="text-sm">{exp.jobDetails}</p>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#73937E] mb-2">Projects</h2>
        {resumeData.projects.map((proj, index) => (
          <div
            key={proj.id}
            className={`p-4 rounded-md shadow-md ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            <h3 className="text-lg font-medium">{proj.projectTitle}</h3>
            <p className="text-sm text-gray-700">
              {proj.projectStartDate} -{" "}
              {proj.isInProgress ? "In Progress" : proj.projectEndDate}
            </p>
            <p className="text-sm">{proj.projectDescription}</p>
            {proj.hostedUrl && (
              <p className="text-sm">
                Hosted:{" "}
                <a
                  href={proj.hostedUrl}
                  className="text-blue-500"
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
                  className="text-blue-500"
                  target="_blank"
                >
                  {proj.codeUrl}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#73937E] mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#73937E] text-white rounded-full text-xs shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#73937E] mb-2">
          Certifications
        </h2>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {resumeData.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      {/* Languages Known Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#73937E] mb-2">
          Languages Known
        </h2>
        <p className="text-sm text-gray-700">{resumeData.languagesKnown}</p>
      </div>

      {/* Co-Curricular Activities Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#73937E] mb-2">
          Co-Curricular Activities
        </h2>
        <p className="text-sm text-gray-700">{resumeData.activities}</p>
      </div>
    </div>
  );
}
