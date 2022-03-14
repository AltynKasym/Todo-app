import "../style.scss";
import { DailyTodo } from "../Components";
import { useState } from "react";

function Sunday(props) {
  const [percentDone, setPercentDone] = useState("");

  props.givePercent7(() => {
    return percentDone;
  });
  return (
    <div className="body">
      Sunday
      <DailyTodo
        todoDay={"todo_7"}
        givePercent={(percentDone) => setPercentDone(percentDone)}
      />
    </div>
  );
}

export default Sunday;
