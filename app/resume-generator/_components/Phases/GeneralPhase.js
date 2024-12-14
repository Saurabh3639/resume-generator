"use client";

import React, { useState } from "react";
import { LuImageUp } from "react-icons/lu";
import TitleComponent from "../TitleComponent";
import { DateElement, TextElement } from "../FormElements";

export default function GeneralPhase({ category }) {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    city: "",
    country: "",
    pincode: "",
    applicationDate: "",
  });

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
