import React from "react";

export const Loader = (props) => {
  return (
    <div
      className={
        "flex items-center justify-center space-x-1 " + props.className
      }
    >
      <div className="w-6 h-6 bg-blue-100 rounded-full animate-bounce" />
      <div className="w-6 h-6 bg-blue-100 rounded-full animate-bounce a-delay-2" />
      <div className="w-6 h-6 bg-blue-100 rounded-full animate-bounce a-delay-4" />
    </div>
  );
};
