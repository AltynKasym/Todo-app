import "../style.scss";
import { DailyTodo } from "../Components";
import { useState } from "react";

function Friday(props) {
  const [percentDone, setPercentDone] = useState("");

  props.givePercent5(() => {
    return percentDone;
  });

  console.log("percentDone from Friday " + percentDone);
  return (
    <div className="body">
      Friday
      <DailyTodo
        todoDay={"todo_5"}
        givePercent={(percentDone) => setPercentDone(percentDone)}
      />
    </div>
  );
}

export default Friday;
