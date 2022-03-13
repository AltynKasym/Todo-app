import {
  Header,
  DailyTodo,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Sunday,
  Saturday,
} from "./components/Components";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
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

export default App;
