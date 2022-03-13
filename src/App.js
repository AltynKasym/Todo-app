import logo from "./logo.svg";
import { Main } from "./components/Components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      {/* <Routes>
        <Route path="main/" element={<Main />} />
      </Routes> */}
      <Main />
    </div>
  );
}

export default App;
