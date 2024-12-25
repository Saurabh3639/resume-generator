"use client";

import React, { useState } from "react";
import TitleComponent from "../TitleComponent";
import { AiOutlineClose } from "react-icons/ai";

export default function CocurricularPhase() {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");

  console.log("activities", activities);

  const handleAddActivity = () => {
    if (newActivity.trim()) {
      setActivities([...activities, newActivity]);
      setNewActivity(""); // Clear input after adding
    }
  };

  const handleRemoveActivity = (indexToRemove) => {
    const updatedActivities = activities.filter(
      (_, index) => index !== indexToRemove
    );
    setActivities(updatedActivities);
  };

  return (
    <div className="w-[80%]">
      <TitleComponent
        heading={"Co-Curricular"}
        subheading={
          "Employers scan skills for relevant keywords. We’ll help you choose the best ones."
        }
      />

      <div className="mb-4 mt-2">
        <div className="">
          <label className="block text-[#252525] text-base font-medium mb-1">
            Co-Curricular Activities in Your Resume
          </label>
          <div className="flex items-center gap-3 w-[50%]">
            <input
              type="text"
              name={"activities"}
              id={"activities"}
              className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
              value={newActivity}
              onChange={(e) => setNewActivity(e.target.value)}
            />
            <button
              onClick={handleAddActivity}
              className="px-5 py-1 bg-primary text-base font-medium text-white rounded-lg"
            >
              Add
            </button>
          </div>
        </div>

        <div className="min-h-[240px] p-2 border border-[#808080] rounded text-sm font-normal my-3 flex flex-wrap content-start gap-3">
          {activities.map((cval, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-[#DBDBDE] shadow-sm rounded-md text-nowrap px-3 py-1 h-fit text-sm text-[#414141] font-normal w-full"
            >
              <span className="w-[100%] text-wrap">
                {index + 1}
                {")"} {cval}
              </span>
              <AiOutlineClose
                onClick={() => handleRemoveActivity(index)}
                className="inline cursor-pointer me-2"
              />
            </div>
          ))}
        </div>

        <hr className="my-4 border border-[#C7C7C7] col-span-2" />
      </div>
    </div>
  );
}

// "use client";

// import React, { useState } from "react";
// import TitleComponent from "../TitleComponent";

// export default function CocurricularPhase() {
//   const [activities, setActivities] = useState("");

//   console.log("activities", activities);

//   return (
//     <div>
//       <TitleComponent
//         heading={"Co-Curricular"}
//         subheading={
//           "Employers scan skills for relevant keywords. We’ll help you choose the best ones."
//         }
//       />

//       <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 mt-2">
//         <div className="col-span-2 relative">
//           <label className="block text-[#252525] text-base font-medium mb-1">
//             Co-Curricular Activities in Your Resume
//           </label>
//           <textarea
//             className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
//             name={"activities"}
//             id={"activities"}
//             cols="30"
//             rows="6"
//             value={activities}
//             onChange={(e) => setActivities(e.target.value)}
//           ></textarea>
//           <button className="absolute bottom-3 right-3 rounded-lg border border-primary text-xs font-medium text-primary py-1 px-3">
//             Ask Felix
//           </button>
//         </div>
//         <hr className="my-4 border border-[#C7C7C7] col-span-2" />
//       </div>
//     </div>
//   );
// }
