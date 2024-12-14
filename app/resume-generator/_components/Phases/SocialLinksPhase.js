"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import { TextElement } from "../FormElements";

export default function SocialLinksPhase() {
  const [formData, setFormData] = useState({
    linkedInUrl: "",
    behanceUrl: "",
    dribbbleUrl: "",
    githubUrl: "",
    personalWebsiteUrl: "",
    projectLinkUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <TitleComponent
        heading={"Social Links"}
        subheading={
          "Please share links to your portfolio, specific projects, and your LinkedIn profile. If you have a personal website, please include that as well."
        }
      />

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
        <TextElement
          labelName={"LinkedIn *"}
          inputName={"linkedInUrl"}
          inputId={"linkedInUrl"}
          inputValue={formData.linkedInUrl}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Behance"}
          inputName={"behanceUrl"}
          inputId={"behanceUrl"}
          inputValue={formData.behanceUrl}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Dribbble"}
          inputName={"dribbbleUrl"}
          inputId={"dribbbleUrl"}
          inputValue={formData.dribbbleUrl}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Github"}
          inputName={"githubUrl"}
          inputId={"githubUrl"}
          inputValue={formData.githubUrl}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Personal Website"}
          inputName={"personalWebsiteUrl"}
          inputId={"personalWebsiteUrl"}
          inputValue={formData.personalWebsiteUrl}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Project Link"}
          inputName={"projectLinkUrl"}
          inputId={"projectLinkUrl"}
          inputValue={formData.projectLinkUrl}
          onChange={handleChange}
        />
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
