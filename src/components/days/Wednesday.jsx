import "../style.scss";
import { DailyTodo } from "../Components";

function Wednesday() {
  return (
    <div className="body">
      Wednesday
      <DailyTodo todoDay={"todo_3"} />
    </div>
  );
}

export default Wednesday;
