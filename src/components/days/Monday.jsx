import "../style.scss";
import { DailyTodo } from "../Components";
import { useState } from "react";

function Monday(props) {
  const [percentDone, setPercentDone] = useState("");

  props.givePercent(() => {
    return percentDone;
  });

  return (
    <div className="body">
      Monday
      <DailyTodo
        todoDay={"todo_1"}
        givePercent={(percentDone) => setPercentDone(percentDone)}
      />
    </div>
  );
}

export default Monday;
