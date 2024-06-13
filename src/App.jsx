import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectPage from "./Pages/ProjectPage";
import Accordion from "./Projects/Accordion/Accordion";
import MusicPlayer from "./Projects/MusicPlayer/MusicPlayer";
import ToDoList from "./Projects/ToDoList/ToDoList";
import DinoGame from "./Projects/DinoGame/DinoGame";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accordion" element={<Accordion />} />
        <Route path="/MusicPlayer" element={<MusicPlayer />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/DinoGame" element={<DinoGame />} />
      </Routes>
    </>
  );
}

export default App;
