import React from "react";

export default function ClassicResumeTemplate({ resumeData }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            {resumeData.fullName}
          </h1>
          <p className="text-gray-600 text-sm">
            {resumeData.contact} | {resumeData.email}
          </p>
          <p className="text-gray-600 text-sm">
            {resumeData.city}, {resumeData.country} - {resumeData.pincode}
          </p>
        </div>
        <img
          src={resumeData.photoUrl}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
      </div>

      {/* Social Links */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Social Links</h2>
        <ul className="list-disc pl-5 text-gray-600 text-sm">
          {resumeData.linkedInUrl && (
            <li>
              LinkedIn:{" "}
              <a
                href={resumeData.linkedInUrl}
                className="text-blue-500"
                target="_blank"
              >
                {resumeData.linkedInUrl}
              </a>
            </li>
          )}
          {resumeData.githubUrl && (
            <li>
              GitHub:{" "}
              <a
                href={resumeData.githubUrl}
                className="text-blue-500"
                target="_blank"
              >
                {resumeData.githubUrl}
              </a>
            </li>
          )}
          {resumeData.projectLinkUrl && (
            <li>
              Project Link:{" "}
              <a
                href={resumeData.projectLinkUrl}
                className="text-blue-500"
                target="_blank"
              >
                {resumeData.projectLinkUrl}
              </a>
            </li>
          )}
        </ul>
      </div>

      {/* Summary Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Profile Summary</h2>
        <p className="text-gray-600 text-sm">{resumeData.summary}</p>
      </div>

      {/* Education Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Education</h2>
        {resumeData.educations.map((edu) => (
          <div key={edu.id} className="mb-2">
            <h3 className="text-sm font-medium text-gray-700">
              {edu.instituteName} - {edu.instituteCourse}
            </h3>
            <p className="text-gray-600 text-sm">
              {edu.instituteLocation} | {edu.instituteDuration}{" "}
              {edu.isPursuing ? "(Currently Pursuing)" : ""}
            </p>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Experience</h2>
        {resumeData.experiences.map((exp) => (
          <div key={exp.id} className="mb-2">
            <h3 className="text-sm font-medium text-gray-700">
              {exp.jobTitle} - {exp.companyName}
            </h3>
            <p className="text-gray-600 text-sm">
              {exp.companyLocation} | {exp.jobStartDate} -{" "}
              {exp.isCurrentlyWorking ? "Present" : exp.jobEndDate}
            </p>
            <p className="text-gray-600 text-sm">{exp.jobDetails}</p>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Projects</h2>
        {resumeData.projects.map((proj) => (
          <div key={proj.id} className="mb-2">
            <h3 className="text-sm font-medium text-gray-700">
              {proj.projectTitle}
            </h3>
            <p className="text-gray-600 text-sm">
              {proj.projectStartDate} -{" "}
              {proj.isInProgress ? "In Progress" : proj.projectEndDate}
            </p>
            <p className="text-gray-600 text-sm">{proj.projectDescription}</p>
            {proj.hostedUrl && (
              <p className="text-sm">
                Hosted URL:{" "}
                <a
                  href={proj.hostedUrl}
                  className="text-blue-500 text-sm"
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
                  className="text-blue-500 text-sm"
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
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 text-gray-800 rounded-lg text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Certifications</h2>
        <ul className="list-disc pl-5 text-gray-600 text-sm">
          {resumeData.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      {/* Languages Known Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Languages Known</h2>
        <p className="text-gray-600 text-sm">{resumeData.languagesKnown}</p>
      </div>

      {/* Co-Curricular Activities Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Co-Curricular Activities
        </h2>
        <p className="text-gray-600 text-sm">{resumeData.activities}</p>
      </div>
    </div>
  );
}
