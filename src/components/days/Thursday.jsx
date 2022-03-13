import "../style.scss";
import { DailyTodo } from "../Components";

function Thursday() {
  return (
    <div className="body">
      Thursday
      <DailyTodo todoDay={"todo_4"} />
    </div>
  );
}

export default Thursday;
