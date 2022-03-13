import React, { createElement } from "react";
import { useState, useEffect } from "react";

function DailyTodo() {
  const [todo, setTodo] = useState("");
  const [todoLocal, setTodoLocal] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
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
    if (localStorage.getItem("todo") === null) {
      todoList = [];
    } else {
      todoList = JSON.parse(localStorage.getItem("todo"));
    }
    todoList.push(todo);
    localStorage.setItem("todo", JSON.stringify(todoList));
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
    localStorage.setItem("todo", JSON.stringify(todoList));
  };

  todoList = JSON.parse(localStorage.getItem("todo"));

  const viewTodo = () => {
    if (localStorage.getItem("todo") === null) {
      todoList = [];
    } else {
      todoList.map((item) => {
        return <li onClick={deleteToDo}>{item} </li>;
      });
    }
  };

  return (
    <>
      <div className="daily-todo">Daily Todo</div>
      <input
        type="text"
        className="input-todo"
        onChange={getTodo}
        value={todoItem}
      />
      <input
        type="button"
        className="send-button"
        value="Добавить Todo"
        onClick={() => addTodo()}
      />
      <ul className="todo-list">
        Todo List
        {viewTodo()}
        {todoList.map((item) => {
          return <li onClick={deleteToDo}>{item} </li>;
        })}
      </ul>
    </>
  );
}

export default DailyTodo;
