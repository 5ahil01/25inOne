import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ name }) => {
  return (
    <>
      <div className="h-[170px] w-[258px] border-[1px] rounded-lg bg-gray-900 border-white ml-[140px] mt-[20px]">
        <div className="h-[140px] w-[245px] border-2 rounded-lg bg-white ml-[5px] mt-[5px]"></div>
        <div className="flex w-full justify-between">
          <div className="ml-[10px]">{name}</div>
          <div className="mr-[10px]">
            <Link to={`/${name}`}>--</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
