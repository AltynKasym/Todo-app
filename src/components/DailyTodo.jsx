import "./style.scss";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import ModeIcon from "@mui/icons-material/Mode";

function DailyTodo(props) {
  const [todo, setTodo] = useState("");
  const [todoLocal, setTodoLocal] = useState(
    JSON.parse(localStorage.getItem(props.todoDay)) || []
  );
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  const todoItem = todo;
  let todoList = [];

  const getTodo = (e) => {
    setTodo(e.target.value);
  };

  // Добавление задач

  function addTodo() {
    todoList = JSON.parse(localStorage.getItem(props.todoDay));
    if (todo.trim() === "") {
      alert("Введите данные");
    } else {
      if (localStorage.getItem(props.todoDay) === null) {
        todoList = [];
      } else {
        todoList.push(todo.trim());
      }
      localStorage.setItem(props.todoDay, JSON.stringify(todoList));
      setTodoLocal((todoLocal) => [...todoLocal, todo]);
      setTodo("");
    }
  }

  // Удаление задач

  const deleteToDo = (e) => {
    todoList = JSON.parse(localStorage.getItem(props.todoDay));
    todoList.forEach((item, id) => {
      if (e.target.parentNode.parentNode.innerText.trim() === item.trim()) {
        setTodoLocal(todoList.splice(id, 1));
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

  const viewTodo = () => {
    todoList = JSON.parse(localStorage.getItem(props.todoDay));
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
      }
    }
  };

  // Переименовать запись

  const renameToDo = (e) => {
    todoList = JSON.parse(localStorage.getItem(props.todoDay));
    let el = e.target.parentNode.parentNode.innerText.trim();
    todoList.forEach((todo, id) => {
      if (el === todo.trim()) {
        setEdit(el);
        setValue(el);
      }
    });
  };

  function saveTodo(id) {
    todoList = JSON.parse(localStorage.getItem(props.todoDay));
    todoList.forEach((todo, index) => {
      setTodoLocal(todoList.splice(id, 1, value));
    });
    localStorage.setItem(props.todoDay, JSON.stringify(todoList));
    setEdit(null);
  }

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
            background: `rgba(14, 13, 13, 0.4)`,
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
              {item.trim() === edit ? (
                <div className="rename-todo">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />{" "}
                  <button onClick={() => saveTodo(id)}>Ok</button>
                </div>
              ) : (
                <div></div>
              )}
              {item[0] === " " ? (
                <li
                  key={item + id}
                  className="daily-todo__output-item daily-todo__output-itemDone"
                >
                  {item}
                  <div className="icons">
                    <ModeIcon
                      className="rename-button"
                      onClick={renameToDo}
                      style={{
                        padding: "3px",
                        cursor: "pointer",
                      }}
                    />
                    <ClearIcon
                      className="delete-button"
                      onClick={deleteToDo}
                      style={{
                        padding: "3px",
                        cursor: "pointer",
                      }}
                    />
                    <CheckIcon
                      className="check-button"
                      onClick={doneToDo}
                      style={{ padding: "3px", cursor: "pointer" }}
                    />
                  </div>
                </li>
              ) : (
                <>
                  <li key={item + id} className="daily-todo__output-item">
                    {item}
                    <div className="icons">
                      <ModeIcon
                        className="rename-button"
                        onClick={renameToDo}
                        style={{
                          padding: "3px",
                          cursor: "pointer",
                        }}
                      />
                      <ClearIcon
                        className="delete-button"
                        onClick={deleteToDo}
                        style={{
                          padding: "3px",
                          cursor: "pointer",
                        }}
                      />
                      <CheckIcon
                        className="check-button"
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
