import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";

import TodoItem from "./TodoItem";
import styles from "./TodoContainer.module.css";

const TodoContainer = ({ addedTask }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTask, setNewTask] = useState(addedTask);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setTodos(json);
          setLoading(true);
        }, 1000);
      });
  });

  useEffect(() => {
    let taskAddedByUser = addedTask.map((task, index) => {
      return <TodoItem task={task} key={index} />;
    });
    setNewTask(taskAddedByUser);
  }, [newTask]);

  return (
    <div className={styles["todo-container"]}>
      {newTask}
      {loading ? (
        todos.map((task, index) => {
          return <TodoItem task={task} key={index} />;
        })
      ) : (
        <Bars
          height={"80"}
          width={"80"}
          color="#4fa94d"
          ariaLabel="bars-loading"
          visible={true}
        />
      )}
    </div>
  );
};

export default TodoContainer;
