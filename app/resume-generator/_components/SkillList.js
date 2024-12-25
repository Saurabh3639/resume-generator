import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function SkillList({
  skills,
  onAction,
  actionType = "add", // 'add' or 'remove'
}) {
  return (
    <div className="w-full h-[340px] p-2 border border-[#808080] rounded text-sm font-normal my-3 flex flex-wrap content-start gap-3 overflow-y-scroll">
      {skills.map((cval) => (
        <div
          key={cval}
          className="border border-[#DBDBDE] shadow-sm rounded-md text-nowrap px-3 py-1 h-fit text-sm text-[#414141] font-normal"
        >
          {actionType == "add" ? (
            <FaPlus
              onClick={() => onAction(cval)}
              className="inline cursor-pointer me-2"
            />
          ) : (
            <FaMinus
              onClick={() => onAction(cval)}
              className="inline cursor-pointer me-2"
            />
          )}
          {cval}
        </div>
      ))}
    </div>
  );
}
