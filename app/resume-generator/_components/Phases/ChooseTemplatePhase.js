import React from "react";

export default function ChooseTemplatePhase() {
  return (
    <div>
      <h3 className="text-3xl font-bold text-[#262626] mb-4">
        Cover Letter Templates
      </h3>

      <p className="text-sm font-normal text-[#414141] mb-4">
        Select a cover later template that you feel will best.
      </p>

      <div>
        <div className="grid grid-cols-4 gap-3">
          <div className="border border-[#FFA6AA] rounded-lg p-2">
            <div>Image</div>
            <h4 className="text-base font-medium">Template 1</h4>
            <p className="text-xs font-normal text-[#757575]">
              Chosen By 200 Users
            </p>
          </div>
          <div className="border border-[#FFA6AA] rounded-lg p-2">
            <div>Image</div>
            <h4 className="text-base font-medium">Template 1</h4>
            <p className="text-xs font-normal text-[#757575]">
              Chosen By 200 Users
            </p>
          </div>
          <div className="border border-[#FFA6AA] rounded-lg p-2">
            <div>Image</div>
            <h4 className="text-base font-medium">Template 1</h4>
            <p className="text-xs font-normal text-[#757575]">
              Chosen By 200 Users
            </p>
          </div>
          <div className="border border-[#FFA6AA] rounded-lg p-2">
            <div>Image</div>
            <h4 className="text-base font-medium">Template 1</h4>
            <p className="text-xs font-normal text-[#757575]">
              Chosen By 200 Users
            </p>
          </div>
        </div>
        <div className="text-center my-4">
          <button className="border border-primary rounded-lg px-3 py-1">
            View All
          </button>
        </div>
      </div>

      <hr className="my-6 border border-[#C7C7C7]" />

      <div className="py-4 flex items-center justify-end gap-6">
        <button className="underline text-sm font-normal">Back</button>
        <button className="px-5 py-1 text-primary text-base font-medium border border-primary rounded-lg">
          Preview
        </button>
        <button className="px-5 py-1 bg-primary text-base font-medium text-white rounded-lg">
          Save & Download
        </button>
      </div>
    </div>
  );
}
