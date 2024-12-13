"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ResumeGenerator() {
  const router = useRouter();

  return (
    <div className="px-6 py-4">
      {/* Block 1 */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xl font-medium">Resume Generator</span>
        </div>
      </div>

      {/* Block 2 */}
      <div className="flex gap-6 items-center">
        <div>
          <h3 className="text-3xl	font-semibold py-1">Hey Saurabh!</h3>
          <p className="text-xs	font-normal text-[#757575] py-1">
            What do you want to create?
          </p>
        </div>
        <div
          onClick={() => router.push("/resume-generator/create-a-resume")}
          className="flex gap-3 border border-[#FFA6AA] rounded-lg shadow py-2 px-4 cursor-pointer"
        >
          <Image
            src="/images/resume_icon2.svg"
            className=""
            height="42"
            width="42"
            alt=""
          />
          <div>
            <h4 className="text-[#414141] text-base font-medium py-1">
              Resume
            </h4>
            <p className="text-[#666666] text-xs font-normal py-1">
              Create From Scratch
            </p>
          </div>
        </div>
        <div
          onClick={() => router.push("/resume-generator/create-a-cover-letter")}
          className="flex gap-3 border border-[#FFA6AA] rounded-lg shadow py-2 px-4 cursor-pointer"
        >
          <Image
            src="/images/resume_icon2.svg"
            className=""
            height="42"
            width="42"
            alt=""
          />
          <div>
            <h4 className="text-[#414141] text-base font-medium py-1">
              Cover Letter
            </h4>
            <p className="text-[#666666] text-xs font-normal py-1">
              Create a New
            </p>
          </div>
        </div>
      </div>

      <hr className="my-6 border border-[#C7C7C7]" />

      <div>
        <h3 className="font-medium text-xl mb-4">Your Documents</h3>
        <div className="rounded-lg bg-red-50 py-2 px-4 flex gap-3 items-center mb-4">
          <button className="bg-primary text-white rounded-lg px-4 py-2">
            All
          </button>
          <button className="text-primary bg-white border border-[#FFA6AA] rounded-lg px-4 py-2">
            Resume
          </button>
          <button className="text-primary bg-white border border-[#FFA6AA] rounded-lg px-4 py-2">
            Cover Letter
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="border border-[#FFA6AA] rounded-lg p-2">
            <div>Image</div>
            <h4 className="text-base font-medium">Title</h4>
            <p className="text-xs font-normal text-[#757575]">
              Last Updated 2 Days Ago
            </p>
            <div className="text-center my-2">
              <button className="border border-primary rounded-lg px-3 py-1">
                Edit
              </button>
            </div>
          </div>
          <div className="border border-[#FFA6AA] rounded-lg p-2">
            <div>Image</div>
            <h4 className="text-base font-medium">Title</h4>
            <p className="text-xs font-normal text-[#757575]">
              Last Updated 2 Days Ago
            </p>
            <div className="text-center my-2">
              <button className="border border-primary rounded-lg px-3 py-1">
                Edit
              </button>
            </div>
          </div>
          <div className="border border-[#FFA6AA] rounded-lg p-2">
            <div>Image</div>
            <h4 className="text-base font-medium">Title</h4>
            <p className="text-xs font-normal text-[#757575]">
              Last Updated 2 Days Ago
            </p>
            <div className="text-center my-2">
              <button className="border border-primary rounded-lg px-3 py-1">
                Edit
              </button>
            </div>
          </div>
          <div className="border border-[#FFA6AA] rounded-lg p-2">
            <div>Image</div>
            <h4 className="text-base font-medium">Title</h4>
            <p className="text-xs font-normal text-[#757575]">
              Last Updated 2 Days Ago
            </p>
            <div className="text-center my-2">
              <button className="border border-primary rounded-lg px-3 py-1">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 border border-[#C7C7C7]" />

      <div>
        <h3 className="font-medium text-xl mb-4">Best Templates For You</h3>
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
    </div>
  );
}
