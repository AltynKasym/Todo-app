import "../style.scss";
import { DailyTodo } from "../Components";

function Tuesday() {
  return (
    <div className="body">
      Tuesday
      <DailyTodo todoDay={"todo_2"} />
    </div>
  );
}

export default Tuesday;
