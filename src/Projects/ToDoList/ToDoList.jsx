import React, { useState } from "react";
import Task from "./Components/Task";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(null);
  const [pholder, setPholder] = useState("");

  const removeTask = (id) => {
    const arr = tasks.filter((task, index) => index !== id);
    setTasks(arr);
  };

  const addTask = () => {
    if (edit) {
      const arr = [...tasks];
      arr[editValue] = input;
      setTasks([...arr]);
      setInput("");
      setPholder("");
      setEdit(false);
    } else {
      setTasks([input, ...tasks]);
      setInput("");
    }
  };

  const editTask = (id) => {
    setPholder("Edit here & click Add !");
    setEditValue(id);
    setEdit(true);
  };

  return (
    <>
      <div className="flex  flex-col w-full  items-center h-[200px] justify-between p-12 ">
        <div className="text-4xl ">To Do List </div>

        <div className="flex items-center space-x-4 ">
          <input
            type="text"
            value={input}
            className="text-black w-[250px] h-[30px] outline-none p-4 "
            placeholder={pholder}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="border-2 border-white w-20"
            onClick={() => addTask()}
          >
            Add
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center ">
        <div className="flex flex-col space-y-3">
          {tasks.map((item, index) => (
            <Task
              title={item}
              key={index}
              id={index}
              removeFunc={removeTask}
              editFunc={editTask}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
