import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="bg-white h-10 rounded-full flex items-center justify-center px-5 py-7 m-2 shadow-sm">
      {children}
    </div>
  );
};
