import { formatDate } from "@/utility/FormatDate";
import React from "react";

export default function ClassicCvTemplate({ cvData }) {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md text-gray-800">
      {/* Header Section */}
      <div className="mb-6">
        <p>{formatDate(cvData.applicationDate)}</p>
        <p>{cvData.companyName}</p>
        <p>{cvData.companyLocation}</p>
      </div>

      {/* Greeting */}
      <div className="mb-4">
        <p>Dear Hiring Manager,</p>
      </div>

      {/* Body Section */}
      <div className="mb-6 space-y-4">
        {/* Introduction */}
        <p>
          I am excited to apply for the <strong>{cvData.jobTitle}</strong>{" "}
          position at <strong>{cvData.companyName}</strong>. With{" "}
          <strong>{cvData.currentExp}</strong> of experience in front-end
          development and a passion for building user-friendly web interfaces, I
          believe I am well-suited to contribute to your team.
        </p>

        {/* Company Appreciation */}
        <p>
          I am particularly drawn to <strong>{cvData.companyName}</strong>{" "}
          because of its innovative platform that enhances secure storage and
          collaboration for enterprise video and podcast content. The emphasis
          on enterprise-level security and providing full control over company
          information aligns with my values and technical expertise.
        </p>

        {/* Role and Contribution */}
        <p>
          In my previous role, I have developed responsive web designs and
          implemented front-end solutions that improved user experience and
          streamlined functionality. My skills in{" "}
          <strong>React, front-end development, responsive web design</strong>,
          and <strong>collaborative problem-solving</strong> enable me to
          effectively contribute to the innovative projects at{" "}
          <strong>{cvData.companyName}</strong>.
        </p>

        {/* Alignment with Qualifications */}
        <p>
          The qualifications outlined in the job description—including
          proficiency in software development principles and a commitment to
          teamwork—match my academic background and professional experience. I
          am eager to bring my technical expertise and enthusiasm for
          collaborative projects to your team.
        </p>
      </div>

      {/* Closing */}
      <div className="mb-4">
        <p>
          Thank you for considering my application. I would welcome the
          opportunity to discuss how my skills and experiences align with the
          needs of your team at <strong>{cvData.companyName}</strong>. Please
          feel free to contact me at <strong>{cvData.contact}</strong> or{" "}
          <strong>{cvData.email}</strong>. I look forward to the possibility of
          contributing to your innovative platform.
        </p>
      </div>

      {/* Sign-off */}
      <div>
        <p>Sincerely,</p>
        <p>{cvData.fullName}</p>
        <p>
          {cvData.city}, {cvData.country} - {cvData.pincode}
        </p>
      </div>
    </div>
  );
}
