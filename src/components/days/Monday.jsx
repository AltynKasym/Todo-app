import "../style.scss";
import { DailyTodo } from "../Components";

function Monday() {
  return (
    <div className="body">
      Monday
      <DailyTodo todoDay={"todo_1"} />
    </div>
  );
}

export default Monday;
