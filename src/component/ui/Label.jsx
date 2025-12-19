import React from "react";

export const Label = ({ val }) => {
  return (
    <div className="flex">
      <div>{val}</div>
      <div className="text-red-500">*</div>
    </div>
  );
};
