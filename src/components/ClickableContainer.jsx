import React from "react";

export const ClickableContainer = ({ children }) => {
  return (
    <div className="bg-white h-10 rounded-full flex items-center px-5 py-8 m-2 cursor-pointer">
      {children}
    </div>
  );
};
