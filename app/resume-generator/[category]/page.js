import React from "react";
import DocBuilder from "../_components/DocBuilder";

export default async function CategoryPage({ params }) {
  const { category } = await params;
  console.log("category :", category);

  // Format category text for title
  const title = category
    .split("-") // Split by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join the words with a space
  console.log("title :", title);

  return <DocBuilder title={title} category={category} />;
}
