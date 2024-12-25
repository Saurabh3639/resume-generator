import React from "react";

export default function MinimalistCVTemplate({ cvData }) {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 text-gray-800 shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b pb-6 mb-6">
        <div>
          <h1 className="text-2xl font-bold">{cvData.fullName}</h1>
          <p className="text-gray-600 text-sm">
            {cvData.contact} | {cvData.email}
          </p>
          <p className="text-gray-600 text-sm">
            {cvData.city}, {cvData.country} - {cvData.pincode}
          </p>
        </div>
        <p className="text-gray-500 text-sm">
          Application Date: {cvData.applicationDate}
        </p>
      </div>

      {/* Job Details Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Job Application Details</h2>
        <div className="mt-4">
          <p className="text-sm">
            <strong>Job Title:</strong> {cvData.jobTitle}
          </p>
          <p className="text-sm">
            <strong>Experience:</strong> {cvData.currentExp}
          </p>
          <p className="text-sm">
            <strong>Company Name:</strong> {cvData.companyName}
          </p>
          <p className="text-sm">
            <strong>Company Location:</strong> {cvData.companyLocation}
          </p>
        </div>
      </div>

      {/* Job Description Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Job Description</h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700">
          {cvData.jobDescription}
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Key Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {cvData.skills?.map((skill, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="border-t pt-4">
        <p className="text-gray-500 text-sm text-center">
          Thank you for considering my application. I look forward to the
          opportunity to discuss how I can contribute to your organization.
        </p>
      </div>
    </div>
  );
}
