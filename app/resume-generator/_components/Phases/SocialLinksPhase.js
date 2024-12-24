"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import { TextElement } from "../FormElements";

const initialFormData = {
  linkedInUrl: "",
  behanceUrl: "",
  dribbbleUrl: "",
  githubUrl: "",
  personalWebsiteUrl: "",
};

export default function SocialLinksPhase() {
  const [formData, setFormData] = useState(initialFormData);

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
      </div>
    </div>
  );
}
