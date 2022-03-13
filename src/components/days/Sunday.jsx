import "../style.scss";
import { DailyTodo } from "../Components";

function Sunday() {
  return (
    <div className="body">
      Sunday
      <DailyTodo todoDay={"todo_7"} />
    </div>
  );
}

export default Sunday;
