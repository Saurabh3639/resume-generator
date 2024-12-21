"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import { FaMinus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

export default function CertificationsPhase() {
  const [certifications, setCertifications] = useState([]);
  const [newCertification, setNewCertification] = useState("");

  console.log("certifications", certifications);

  const handleAddCertification = () => {
    if (newCertification.trim()) {
      setCertifications([...certifications, newCertification]);
      setNewCertification(""); // Clear input after adding
    }
  };

  const handleRemoveCertification = (indexToRemove) => {
    const updatedCertifications = certifications.filter(
      (_, index) => index !== indexToRemove
    );
    setCertifications(updatedCertifications);
  };

  return (
    <div>
      <TitleComponent
        heading={"Certifications"}
        subheading={
          "Highlight any relevant certifications that showcase your expertise and dedication."
        }
      />

      <div>
        <label className="block text-[#252525] text-base font-medium mb-1">
          Add Certification
        </label>
        <div className="flex items-center gap-3 w-[50%]">
          <input
            type="text"
            name={"certification"}
            id={"certifications"}
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            value={newCertification}
            onChange={(e) => setNewCertification(e.target.value)}
          />
          <button
            onClick={handleAddCertification}
            className="px-5 py-1 bg-primary text-base font-medium text-white rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="w-[75%] min-h-[240px] p-2 border border-[#808080] rounded text-sm font-normal my-3 flex flex-wrap content-start gap-3">
          {certifications.map((cval, index) => (
            <div
              key={index}
              className="border border-[#DBDBDE] shadow-sm rounded-md text-nowrap px-3 py-1 h-fit text-sm text-[#414141] font-normal"
            >
              <AiOutlineClose
                onClick={() => handleRemoveCertification(index)}
                className="inline cursor-pointer me-2"
              />
              {cval}
            </div>
          ))}
        </div>

        <hr className="my-4 border border-[#C7C7C7]" />
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
