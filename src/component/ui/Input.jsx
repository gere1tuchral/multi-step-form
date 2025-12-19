import React from "react";
import { Label } from "./Label";
export const Input = ({ PlaceholderName, LabelName }) => {
  return (
    <div className="flex flex-col grow">
      <Label val={LabelName} />
      <input
        type="text"
        placeholder="PlaceholderName"
        className="border rounded-md p-1 h-11"
      />
    </div>
  );
};
