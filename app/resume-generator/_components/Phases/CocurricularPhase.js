"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";

export default function CocurricularPhase() {
  const [activities, setActivities] = useState("");

  console.log("activities", activities);

  return (
    <div>
      <TitleComponent
        heading={"Co-Curricular"}
        subheading={
          "Employers scan skills for relevant keywords. We’ll help you choose the best ones."
        }
      />

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
        <div className="col-span-2 relative">
          <label className="block text-[#252525] text-base font-medium mb-1">
            Co-Curricular Activities in Your Resume
          </label>
          <textarea
            className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
            name={"activities"}
            id={"activities"}
            cols="30"
            rows="6"
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
          ></textarea>
          <button className="absolute bottom-3 right-3 rounded-lg border border-primary text-xs font-medium text-primary py-1 px-3">
            Ask Felix
          </button>
        </div>
        <hr className="my-4 border border-[#C7C7C7] col-span-2" />
      </div>
    </div>
  );
}
