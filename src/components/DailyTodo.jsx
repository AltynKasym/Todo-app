import "./style.scss";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

function DailyTodo(props) {
  // const givePercent = (e) => {
  //   percent(e);
  // };

  const [todo, setTodo] = useState("");
  const [todoLocal, setTodoLocal] = useState(
    JSON.parse(localStorage.getItem(props.todoDay)) || []
  );

  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(todoLocal));
  // }, [todoLocal]);

  const todoItem = todo;
  let todoList = [];

  const getTodo = (e) => {
    setTodo(e.target.value);
  };

  // Добавление задач

  function addTodo() {
    if (todo.trim() === "") {
      alert("Введите данные");
    } else {
      if (localStorage.getItem(props.todoDay) === null) {
        todoList = [];
      } else {
        todoList = JSON.parse(localStorage.getItem(props.todoDay));
      }
      todoList.push(todo.trim());
      localStorage.setItem(props.todoDay, JSON.stringify(todoList));
      setTodoLocal((todoLocal) => [...todoLocal, todo]);
      setTodo("");
    }
  }

  // Удаление задач

  const deleteToDo = (e) => {
    todoList.forEach((item, id) => {
      if (e.target.parentNode.parentNode.innerText.trim() === item.trim()) {
        setTodoLocal(todoList.splice(id, 1));
        // console.log(e.target.parentNode.parentNode.innerText);
      }
    });
    localStorage.setItem(props.todoDay, JSON.stringify(todoList));
  };

  // Задача выполнена
  todoList = JSON.parse(localStorage.getItem(props.todoDay));

  let completed = [];
  let nonCompleted = [];
  let percentDone;
  const doneToDo = (e) => {
    todoList.forEach((item, id) => {
      if (e.target.parentNode.parentNode.innerText.trim() === item.trim()) {
        if (item[0] === " ") {
          let done = item.trim();

          setTodoLocal(todoList.splice(id, 1, done));
        } else {
          let done = " " + e.target.parentNode.parentNode.innerText;
          completed.push(item);
          setTodoLocal(todoList.splice(id, 1, done));
        }
      }
    });
    localStorage.setItem(props.todoDay, JSON.stringify(todoList));
  };

  todoList = JSON.parse(localStorage.getItem(props.todoDay));

  const viewTodo = () => {
    if (localStorage.getItem(props.todoDay) === null) {
      todoList = [];
    } else {
      todoList.forEach((item) => {
        if (item[0] === " ") {
          completed.push(item.trim());
        } else {
          nonCompleted.push(item.trim());
        }
      });
      if (todoList.length !== 0) {
        percentDone = Math.trunc(
          (completed.length * 100) / (nonCompleted.length + completed.length)
        );
        props.givePercent(() => {
          return percentDone;
        });

        console.log(`Процент выполненных задач  ${percentDone}`);
      }
    }
  };

  // Переименовать запись

  const renameToDo = (e) => {
    return <>{document.createElement("input").append(e.target.textContent)}</>;
  };

  return (
    <div className="daily-todo">
      <div className="daily-todo__input">
        <TextField
          id="standard-basic"
          label="Enter Todo"
          variant="standard"
          className="input-todo"
          onChange={getTodo}
          value={todoItem}
        />
        {viewTodo()}

        <Button
          variant="contained"
          onClick={() => addTodo()}
          style={{
            background: `linear-gradient(to right, red ${percentDone}%, transparent 0%)`,
          }}
        >
          Add Todo
        </Button>
      </div>
      <div className="daily-todo__output">
        Todo List
        {todoList.map((item, id) => {
          return (
            <>
              {item[0] === " " ? (
                <>
                  <li
                    onClick={renameToDo}
                    key={item + id}
                    className="daily-todo__output-item daily-todo__output-itemDone"
                  >
                    {item}
                    <div className="icons">
                      <ClearIcon
                        className="delete-button"
                        onClick={deleteToDo}
                        style={{
                          padding: "3px",
                          cursor: "pointer",
                        }}
                      />
                      <CheckIcon
                        onClick={doneToDo}
                        style={{ padding: "3px", cursor: "pointer" }}
                      />
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={renameToDo}
                    key={item + id}
                    className="daily-todo__output-item"
                  >
                    {item}
                    <div className="icons">
                      <ClearIcon
                        className="delete-button"
                        onClick={deleteToDo}
                        style={{
                          padding: "3px",
                          cursor: "pointer",
                        }}
                      />
                      <CheckIcon
                        onClick={doneToDo}
                        style={{ padding: "3px", cursor: "pointer" }}
                      />
                    </div>
                  </li>
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DailyTodo;
