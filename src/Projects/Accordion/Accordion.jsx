import React, { useState } from "react";
import Section from "./Section";

const Accordion = () => {
  const daata = [
    {
      name: "Section 1",
      info: "HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser",
      id: 1,
    },
    {
      name: "Section 2",
      info: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. ",
      id: 2,
    },
    {
      name: "Section 3",
      info: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, ",
      id: 3,
    },
    {
      name: "Section 4",
      info: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
      id: 4,
    },
  ];

  return (
    <>
      <div className="w-full h-[200px] flex justify-center items-center">
        <div className="text-6xl">Accordion</div>
      </div>

      <div className="flex flex-col w-full items-center space-y-5">
        {daata.map((item) => (
          <Section title={item.name} info={item.info} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Accordion;
