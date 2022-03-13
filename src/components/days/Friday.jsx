import "../style.scss";
import { DailyTodo } from "../Components";

function Friday() {
  return (
    <div className="body">
      Friday
      <DailyTodo todoDay={"todo_5"} />
    </div>
  );
}

export default Friday;
