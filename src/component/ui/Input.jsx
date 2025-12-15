import React from "react";

export const Input = () => {
  return (
    <div className="flex flex-col grow">
      <input
        type="text"
        placeholder="Placeholder"
        className="border rounded-md p-1 h-11"
      />
    </div>
  );
};
