import React from "react";
import {
  DailyTodo,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Sunday,
  Saturday,
} from "./Components";
import { Routes, Route, Link } from "react-router-dom";

function Main() {
  return (
    <div>
      Main app
      <Link to="/main">Main</Link>
      <Link to="/Monday">Monday</Link>
      <Link to="/Tuesday">Tuesday</Link>
      <Link to="/Wednesday">Wednesday</Link>
      <Link to="/Thursday">Thursday</Link>
      <Link to="/Friday">Friday</Link>
      <Link to="/Saturday">Saturday</Link>
      <Link to="/Sunday">Sunday</Link>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/Monday" element={<Monday />} />
        <Route path="/Tuesday" element={<Tuesday />} />
        <Route path="/Wednesday" element={<Wednesday />} />
        <Route path="/Thursday" element={<Thursday />} />
        <Route path="/Friday" element={<Friday />} />
        <Route path="/Saturday" element={<Saturday />} />
        <Route path="/Sunday" element={<Sunday />} />
      </Routes>
    </div>
  );
}

export default Main;
