import React from "react";

export default function TitleComponent({ heading, subheading }) {
  return (
    <>
      <h3 className="text-3xl font-bold text-[#262626] mb-4">{heading}</h3>
      <p className="text-sm font-normal text-[#414141] mb-4">{subheading}</p>
    </>
  );
}
