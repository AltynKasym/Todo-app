import "./style.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function header({
  percent1,
  percent2,
  percent3,
  percent4,
  percent5,
  percent6,
  percent7,
}) {
  return (
    <div className="header">
      <Link to="/Todo-app/Monday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, #05642d ${percent1}%, transparent 0%)`,
          }}
        >
          Monday
        </Button>
      </Link>
      <Link to="/Todo-app/Tuesday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, #05642d ${percent2}%, transparent 0%)`,
          }}
        >
          Tuesday
        </Button>
      </Link>
      <Link to="/Todo-app/Wednesday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, #05642d ${percent3}%, transparent 0%)`,
          }}
        >
          Wednesday
        </Button>
      </Link>
      <Link to="/Todo-app/Thursday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, #05642d ${percent4}%, transparent 0%)`,
          }}
        >
          Thursday
        </Button>
      </Link>
      <Link to="/Todo-app/Friday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, #05642d ${percent5}%, transparent 0%)`,
          }}
        >
          Friday
        </Button>
      </Link>
      <Link to="/Todo-app/Saturday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, #05642d ${percent6}%, transparent 0%)`,
          }}
        >
          Saturday
        </Button>
      </Link>
      <Link to="/Todo-app/Sunday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, #05642d ${percent7}%, transparent 0%)`,
          }}
        >
          Sunday
        </Button>
      </Link>
    </div>
  );
}

export default header;
