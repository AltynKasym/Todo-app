import "./style.scss";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

function DailyTodo(props) {
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
    if (localStorage.getItem(props.todoDay) === null) {
      todoList = [];
    } else {
      todoList = JSON.parse(localStorage.getItem(props.todoDay));
    }
    todoList.push(todo);
    localStorage.setItem(props.todoDay, JSON.stringify(todoList));
    setTodoLocal((todoLocal) => [...todoLocal, todo]);
    setTodo("");
  }

  // Удаление задач

  const deleteToDo = (e) => {
    todoList.forEach((item, id) => {
      if (e.target.parentNode.parentNode.innerText === item) {
        setTodoLocal(todoList.splice(id, 1));
        console.log(e.target.parentNode.parentNode.innerText);
      }
    });
    localStorage.setItem(props.todoDay, JSON.stringify(todoList));
  };

  // Задача выполнена

  const doneToDo = (e) => {
    e.target.parentNode.style.color = "red";
    localStorage.setItem("style", JSON.stringify(todoList));
  };

  todoList = JSON.parse(localStorage.getItem(props.todoDay));

  const viewTodo = () => {
    if (localStorage.getItem(props.todoDay) === null) {
      todoList = [];
    }
    // else {
    //   todoList.map((item) => {
    //     return <li onClick={deleteToDo}>{item} </li>;
    //   });
    // }
  };

  // Переименовать запись

  const renameToDO = (e) => {
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

        <Button variant="contained" onClick={() => addTodo()}>
          Add Todo
        </Button>
      </div>
      <div className="daily-todo__output">
        Todo List
        {viewTodo()}
        {todoList.map((item, id) => {
          return (
            <li
              onClick={renameToDO}
              key={id}
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
          );
        })}
      </div>
    </div>
  );
}

export default DailyTodo;
