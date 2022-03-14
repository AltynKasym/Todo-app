import "../style.scss";
import { DailyTodo } from "../Components";
import { useState } from "react";

function Wednesday(props) {
  const [percentDone, setPercentDone] = useState("");

  props.givePercent3(() => {
    return percentDone;
  });
  return (
    <div className="body">
      Wednesday
      <DailyTodo
        todoDay={"todo_3"}
        givePercent={(percentDone) => setPercentDone(percentDone)}
      />
    </div>
  );
}

export default Wednesday;
