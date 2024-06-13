import React from "react";

const Task = ({ title, removeFunc, editFunc, id }) => {
  return (
    <div className="flex space-x-3 w-[350px] h-14 items-center justify-between border-2 px-2">
      <p>{title}</p>
      <div className="flex w-24 h-7 items-center justify-between">
        <button className="border-2 " onClick={() => removeFunc(id)}>
          Delete
        </button>
        <button className="border-2 " onClick={() => editFunc(id)}>
          Edit
        </button>{" "}
      </div>
    </div>
  );
};

export default Task;
