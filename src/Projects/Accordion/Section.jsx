import React from "react";
import { useState } from "react";

const Section = ({ title, info, handleClick, id }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" w-[600px] h-[70px] p-3 flex justify-between items-center border-2 text-3xl">
        <div>{title}</div>
        <button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
      </div>
      {show && (
        <div>
          <div className=" border-2 w-[600px] h-[60px]">{info}</div>
        </div>
      )}
    </>
  );
};

export default Section;
