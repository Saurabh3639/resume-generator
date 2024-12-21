"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";

export default function SummaryPhase() {
  const [summary, setSummary] = useState("");

  console.log("summary :", summary);

  return (
    <div>
      <TitleComponent
        heading={"Summary"}
        subheading={
          "Provide a brief overview of your career goals, skills, and achievements to make a great first impression."
        }
      />

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
        <div className="col-span-2 relative">
          <label className="block text-[#252525] text-base font-medium mb-1">
            Write a Short Profile Summary for Your Resume
          </label>
          <textarea
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            name={"summary"}
            id={"summary"}
            cols="30"
            rows="6"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
          <button className="absolute bottom-3 right-3 rounded-lg border border-primary text-xs font-medium text-primary py-1 px-3">
            Ask Felix
          </button>
        </div>
        <hr className="my-4 border border-[#C7C7C7] col-span-2" />
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
