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
      <Link to="/Monday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, darkgreen ${percent1}%, transparent 0%)`,
          }}
        >
          Monday
        </Button>
      </Link>
      <Link to="/Tuesday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, darkgreen ${percent2}%, transparent 0%)`,
          }}
        >
          Tuesday
        </Button>
      </Link>
      <Link to="/Wednesday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, darkgreen ${percent3}%, transparent 0%)`,
          }}
        >
          Wednesday
        </Button>
      </Link>
      <Link to="/Thursday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, darkgreen ${percent4}%, transparent 0%)`,
          }}
        >
          Thursday
        </Button>
      </Link>
      <Link to="/Friday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, darkgreen ${percent5}%, transparent 0%)`,
          }}
        >
          Friday
        </Button>
      </Link>
      <Link to="/Saturday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, darkgreen ${percent6}%, transparent 0%)`,
          }}
        >
          Saturday
        </Button>
      </Link>
      <Link to="/Sunday">
        <Button
          variant="outlined"
          style={{
            background: `linear-gradient(to right, darkgreen ${percent7}%, transparent 0%)`,
          }}
        >
          Sunday
        </Button>
      </Link>
    </div>
  );
}

export default header;
