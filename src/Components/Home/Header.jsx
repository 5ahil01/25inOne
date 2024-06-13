import React from "react";
import GitHub from "../../Images/Git_Hub.png";
import Linkedin from "../../Images/Linkedin.png";
const Header = () => {
  return (
    <div className="mt-3 w-full flex justify-between">
      <p className="ml-36">SAHIL</p>
      <p className="flex space-x-[2px] mr-20">
        <a
          href="https://github.com/5ahil01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GitHub}
            alt=""
            className="w-[30px] h-[30px] rounded-[15px]"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-lahudkar-60b0b8258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Linkedin}
            alt=""
            className="w-[30px] h-[30px] rounded-[5px]"
          />
        </a>
      </p>
    </div>
  );
};

export default Header;
