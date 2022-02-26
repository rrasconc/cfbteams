import React from "react";
import { Chip } from "./Chip";

export const TeamItem = (props) => {
  return (
    <div className="group flex items-center max-w-md m-5 rounded-full px-1 lg:px-5 cursor-pointer zoom-out">
      <img
        loading="lazy"
        src={props.teamDetails.logos[0]}
        className="h-24 bg-blue-50 p-5 rounded-full group-hover:scale-125 transition ease-out duration-300"
      />
      <div className="p-5">
        <h1 className="text-lg font-bold group-hover:text-blue-500 transition ease-out duration-300">
          {props.teamDetails.school} {props.teamDetails.mascot} (
          {props.teamDetails.abbreviation})
        </h1>
        <div>
          <span>{props.teamDetails.location.name}, </span>
          <span className="mx-2">{props.teamDetails.location.city}</span>
        </div>
        <div className="flex">
          <Chip label={props.conference} />
          {props.teamDetails.division && (
            <Chip label={props.teamDetails.division} />
          )}
        </div>
      </div>
    </div>
  );
};
