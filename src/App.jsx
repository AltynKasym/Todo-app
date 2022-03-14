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
  Main,
} from "./components/Components";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./App.scss";

function App() {
  const [percentDone, setPercentDone] = useState("");
  const [percentDone5, setPercentDone5] = useState("");

  console.log("percentDone from App " + percentDone);
  return (
    <>
      <div className="App">
        <Header percent1={percentDone} percent5={percentDone5} />
        <Routes>
          <Route
            path="/Monday"
            element={
              <Monday
                givePercent={(percentDone) => setPercentDone(percentDone)}
              />
            }
          />
          <Route path="/Tuesday" element={<Tuesday />} />
          <Route path="/Wednesday" element={<Wednesday />} />
          <Route path="/Thursday" element={<Thursday />} />
          <Route
            path="/Friday"
            element={
              <Friday
                givePercent5={(percentDone5) => setPercentDone5(percentDone5)}
              />
            }
          />
          <Route path="/Saturday" element={<Saturday />} />
          <Route path="/Sunday" element={<Sunday />} />
          {/* <Route path="/" element={<Main />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
