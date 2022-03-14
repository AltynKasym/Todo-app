import "../style.scss";
import { DailyTodo } from "../Components";
import { useState } from "react";

function Tuesday(props) {
  const [percentDone, setPercentDone] = useState("");

  props.givePercent2(() => {
    return percentDone;
  });
  return (
    <div className="body">
      Tuesday
      <DailyTodo
        todoDay={"todo_2"}
        givePercent={(percentDone) => setPercentDone(percentDone)}
      />
    </div>
  );
}

export default Tuesday;
