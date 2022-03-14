import "../style.scss";
import { DailyTodo } from "../Components";
import { useState } from "react";

function Saturday(props) {
  const [percentDone, setPercentDone] = useState("");

  props.givePercent6(() => {
    return percentDone;
  });
  return (
    <div className="body">
      Saturday
      <DailyTodo
        todoDay={"todo_6"}
        givePercent={(percentDone) => setPercentDone(percentDone)}
      />
    </div>
  );
}

export default Saturday;
