import "../style.scss";
import { DailyTodo } from "../Components";

function Saturday() {
  return (
    <div className="body">
      Saturday
      <DailyTodo todoDay={"todo_6"} />
    </div>
  );
}

export default Saturday;
