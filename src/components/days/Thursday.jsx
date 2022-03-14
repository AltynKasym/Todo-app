import "../style.scss";
import { DailyTodo } from "../Components";
import { useState } from "react";

function Thursday(props) {
  const [percentDone, setPercentDone] = useState("");

  props.givePercent4(() => {
    return percentDone;
  });
  return (
    <div className="body">
      Thursday
      <DailyTodo
        todoDay={"todo_4"}
        givePercent={(percentDone) => setPercentDone(percentDone)}
      />
    </div>
  );
}

export default Thursday;
