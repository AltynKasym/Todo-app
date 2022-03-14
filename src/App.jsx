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
  const [percentDone1, setPercentDone1] = useState("");
  const [percentDone2, setPercentDone2] = useState("");
  const [percentDone3, setPercentDone3] = useState("");
  const [percentDone4, setPercentDone4] = useState("");
  const [percentDone5, setPercentDone5] = useState("");
  const [percentDone6, setPercentDone6] = useState("");
  const [percentDone7, setPercentDone7] = useState("");

  return (
    <>
      <div className="App">
        <Header
          percent1={percentDone1}
          percent2={percentDone2}
          percent3={percentDone3}
          percent4={percentDone4}
          percent5={percentDone5}
          percent6={percentDone6}
          percent7={percentDone7}
        />
        <Routes>
          <Route
            path="/Monday"
            element={
              <Monday
                givePercent={(percentDone1) => setPercentDone1(percentDone1)}
              />
            }
          />
          <Route
            path="/Tuesday"
            element={
              <Tuesday
                givePercent2={(percentDone2) => setPercentDone2(percentDone2)}
              />
            }
          />
          <Route
            path="/Wednesday"
            element={
              <Wednesday
                givePercent3={(percentDone3) => setPercentDone3(percentDone3)}
              />
            }
          />
          <Route
            path="/Thursday"
            element={
              <Thursday
                givePercent4={(percentDone4) => setPercentDone4(percentDone4)}
              />
            }
          />
          <Route
            path="/Friday"
            element={
              <Friday
                givePercent5={(percentDone5) => setPercentDone5(percentDone5)}
              />
            }
          />
          <Route
            path="/Saturday"
            element={
              <Saturday
                givePercent6={(percentDone6) => setPercentDone6(percentDone6)}
              />
            }
          />
          <Route
            path="/Sunday"
            element={
              <Sunday
                givePercent7={(percentDone7) => setPercentDone7(percentDone7)}
              />
            }
          />
          {/* <Route path="/" element={<Main />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
