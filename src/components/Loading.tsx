import React, { memo } from "react";

const Loading: React.FC<{ text?: string }> = ({ text = "loading..." }) => {
  console.log("LOADING RENDER...");
  return <span>{text}</span>;
};

export default memo(Loading);
