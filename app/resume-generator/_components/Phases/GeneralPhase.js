"use client";

import React, { useState } from "react";
import { LuImageUp } from "react-icons/lu";
import TitleComponent from "../TitleComponent";

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
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Phone *
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Email *
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Current City *
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Country *
          </label>
          <input
            type="text"
            name="country"
            id="country"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[#252525] text-base font-medium mb-1">
            Pincode *
          </label>
          <input
            type="text"
            name="pincode"
            id="pincode"
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        {category == "create-a-cover-letter" ? (
          <div>
            <label className="block text-[#252525] text-base font-medium mb-1">
              Date *
            </label>
            <input
              type="date"
              name="applicationDate"
              id="applicationDate"
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={formData.applicationDate}
              onChange={handleChange}
            />
          </div>
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
