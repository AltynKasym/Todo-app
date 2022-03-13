import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";

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

  function addTodo() {
    // e.prevent.default;
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

  const deleteToDo = (e) => {
    // if (localStorage.getItem("todo") === null) {
    //   todoList = [];
    // } else {

    todoList.forEach((item, id) => {
      if (e.target.innerText === item) {
        setTodoLocal(todoList.splice(id, 1));
        console.log("Ok");
      }
    });
    // );
    // }
    localStorage.setItem(props.todoDay, JSON.stringify(todoList));
  };

  todoList = JSON.parse(localStorage.getItem(props.todoDay));

  const viewTodo = () => {
    if (localStorage.getItem(props.todoDay) === null) {
      todoList = [];
    } else {
      todoList.map((item) => {
        return <li onClick={deleteToDo}>{item} </li>;
      });
    }
  };

  const renameToDO = (e) => {
    return <>{document.createElement("input").append(e.target.textContent)}</>;
  };

  return (
    <>
      <div className="daily-todo">
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
      <ul className="todo-list">
        Todo List
        {viewTodo()}
        {todoList.map((item, id) => {
          return (
            <li onDoubleClick={deleteToDo} onClick={renameToDO} key={id}>
              {item}{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DailyTodo;
