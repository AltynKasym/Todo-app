import "./style.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function header({ percent1, percent5 }) {
  console.log("Monday from Header " + percent1);
  console.log("Friday from Header " + percent5);
  return (
    <div className="header">
      {/* <Link to="/main">
        <button>Main</button>
      </Link> */}
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
        <Button variant="outlined">Tuesday</Button>
      </Link>
      <Link to="/Wednesday">
        <Button variant="outlined">Wednesday</Button>
      </Link>
      <Link to="/Thursday">
        <Button variant="outlined">Thursday</Button>
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
        <Button variant="outlined">Saturday</Button>
      </Link>
      <Link to="/Sunday">
        <Button variant="outlined">Sunday</Button>
      </Link>
    </div>
  );
}

export default header;
