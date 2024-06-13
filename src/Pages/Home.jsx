import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../Components/Home/ProjectCard";
import { projectName } from "../Data/Data";

import Header from "../Components/Home/Header";

const Home = () => {
  return (
    <main className="mx-32 text-cyan-50 min-h-[100vh]   ">
      {<Header />}

      <div className="flex w-full justify-center  items-center h-[350px]">
        <div className="text-7xl w-[550px] flex flex-col items-center">
          <div>Twenty Five </div>
          <div> React Js Projects</div>
        </div>
      </div>

      <div className="flex w-full mb-5 flex-wrap ">
        {projectName.map((item, index) => (
          <ProjectCard name={item} key={index} />
        ))}
      </div>
    </main>
  );
};

export default Home;
