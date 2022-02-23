import React from "react";

export const Chip = ({ label }) => {
  return (
    <div className="p-1 mr-2 mt-2 flex w-20 bg-red-50 rounded-full justify-center items-center">
      <span>{label}</span>
    </div>
  );
};
