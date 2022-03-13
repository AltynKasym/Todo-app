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
        console.log(e.target.parentNode.parentNode.innerText);
      }
    });
    localStorage.setItem(props.todoDay, JSON.stringify(todoList));
  };

  // Задача выполнена
  todoList = JSON.parse(localStorage.getItem(props.todoDay));

  const doneToDo = (e) => {
    todoList.forEach((item, id) => {
      if (e.target.parentNode.parentNode.innerText.trim() === item.trim()) {
        if (item[0] === " ") {
          let done = item.trim();
          setTodoLocal(todoList.splice(id, 1, done));

          console.log(done);
        } else {
          let done = " " + e.target.parentNode.parentNode.innerText;
          // console.log(done);
          setTodoLocal(todoList.splice(id, 1, done));

          console.log(done);
        }
      }
    });
    localStorage.setItem(props.todoDay, JSON.stringify(todoList));

    todoList.forEach((item) => {
      if (item[0] === " ") {
        console.log(e);
        e.target.parentNode.parentNode.style.backgroundColor = `#44014C`;
      } else {
        e.target.parentNode.parentNode.style.backgroundColor = `none`;
      }
    });
  };

  todoList = JSON.parse(localStorage.getItem(props.todoDay));

  const viewTodo = () => {
    if (localStorage.getItem(props.todoDay) === null) {
      todoList = [];
    } else {
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
              onClick={renameToDo}
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
