import React, { useState } from "react";

export const Switcher = (props) => {
  const [position, setPosition] = useState(0);
  const currentConference = props.conferences[position]?.name;
  const nextConference = props.conferences[position + 1]?.name;

  const handleOnNext = () => {
    if (position < props.conferences.length - 1) {
      let next = position + 1;
      props.handleSwitch(next);
      setPosition(next);
    } else {
      props.handleSwitch(0);
      setPosition(0);
    }
  };

  const handleOnPrev = () => {
    if (position > 0) {
      let prev = position - 1;
      props.handleSwitch(prev);
      setPosition(prev);
    } else {
      let last = props.conferences.length - 1;
      props.handleSwitch(last);
      setPosition(last);
    }
  };

  return (
    <div className="flex flex-row items-center px-10 space-x-3">
      <button className="group p-3 hover:scale-125" onClick={handleOnPrev}>
        <svg
          className="group-hover:fill-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </button>
      <h1 className="text-2xl font-bold">{currentConference?.toUpperCase()}</h1>
      <button className="group p-3 hover:scale-125" onClick={handleOnNext}>
        <svg
          className="group-hover:fill-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </button>
      <h1 className="text-2xl font-bold text-gray-300">
        {nextConference?.toUpperCase()}
      </h1>
    </div>
  );
};
