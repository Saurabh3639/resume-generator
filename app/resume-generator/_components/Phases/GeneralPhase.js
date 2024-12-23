"use client";

import React, { useState } from "react";
import { LuImageUp } from "react-icons/lu";
import TitleComponent from "../TitleComponent";
import { DateElement, TextElement } from "../FormElements";

const initialFormData = {
  photoUrl: "",
  fullName: "",
  contact: "",
  email: "",
  city: "",
  country: "",
  pincode: "",
  languagesKnown: "",
  applicationDate: "",
};

export default function GeneralPhase({ category }) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log("formData", formData);

  return (
    <div>
      {category == "create-a-resume" ? (
        <TitleComponent
          heading={"Tell us Something about you."}
          subheading={"* indicates a required field"}
        />
      ) : category == "create-a-cover-letter" ? (
        <TitleComponent
          heading={"Tell us Something about your application."}
          subheading={"* Please provide sender information."}
        />
      ) : null}

      {category == "create-a-resume" ? (
        <div className="h-[160px] w-[160px] p-2 cursor-pointer flex flex-col items-center justify-center gap-2 text-[#414141] border border-black rounded-lg mb-4">
          <LuImageUp className="text-3xl" />
          <span className="text-center">Upload Your Photo Here</span>
        </div>
      ) : null}

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
        <TextElement
          labelName={"Full Name *"}
          inputName={"fullName"}
          inputId={"fullName"}
          inputValue={formData.fullName}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Phone *"}
          inputName={"contact"}
          inputId={"contact"}
          inputValue={formData.contact}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Email *"}
          inputName={"email"}
          inputId={"email"}
          inputValue={formData.email}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Current City *"}
          inputName={"city"}
          inputId={"city"}
          inputValue={formData.city}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Country *"}
          inputName={"country"}
          inputId={"country"}
          inputValue={formData.country}
          onChange={handleChange}
        />
        <TextElement
          labelName={"Pincode *"}
          inputName={"pincode"}
          inputId={"pincode"}
          inputValue={formData.pincode}
          onChange={handleChange}
        />

        {category == "create-a-resume" ? (
          <TextElement
            labelName={"Languages Known *"}
            inputName={"languagesKnown"}
            inputId={"languagesKnown"}
            inputValue={formData.languagesKnown}
            onChange={handleChange}
          />
        ) : null}

        {category == "create-a-cover-letter" ? (
          <DateElement
            labelName={"Date *"}
            inputName={"applicationDate"}
            inputId={"applicationDate"}
            inputValue={formData.applicationDate}
            onChange={handleChange}
          />
        ) : null}
      </div>
    </div>
  );
}
