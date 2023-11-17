import React, { useState } from "react";

import styles from "./TodoItem.module.css";

const TodoItem = ({ task }) => {
  const [editClass, setEditClass] = useState("fa-solid fa-pen-to-square");
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const textStyle = {
    textDecoration: isCompleted
      ? "line-through 2px hsl(199deg 31% 14%)"
      : "none",
  };

  const editTask = (e) => {
    let taskInDOM = e.target.parentElement.parentElement.children[0];
    if (editClass === "fa-solid fa-pen-to-square") {
      // Deleting the task and adding a input filed
      let textToBeEdited = taskInDOM.children[1].innerText;
      const node = document.createElement("input");
      node.setAttribute("type", "text");
      node.setAttribute("value", textToBeEdited);
      taskInDOM.appendChild(node);
      taskInDOM.children[1].remove();
      setEditClass("fa-solid fa-check");
    } else {
      let newTaskAfterEdit = taskInDOM.children[1].value;
      const node = document.createElement("div");
      node.setAttribute("style", textStyle);
      node.innerText = newTaskAfterEdit;
      taskInDOM.appendChild(node);
      taskInDOM.children[1].remove();
      setEditClass("fa-solid fa-pen-to-square");
    }
  };

  const deleteTask = (e) => {
    let taskInDOM = e.target.parentElement.parentElement.children[0];
    taskInDOM.parentElement.remove();
  };

  const completeTask = (e) => {
    if (isCompleted === true) {
      setIsCompleted(false);
    } else {
      setIsCompleted(true);
    }
  };

  const completedStyle = {
    color: isCompleted ? "green" : "#2c2c2c",
  };
  return (
    <div className={styles["todo-item"]}>
      <div className={styles["icon-tasks"]}>
        <i
          className="fa-solid fa-circle-check"
          onClick={completeTask}
          style={completedStyle}
        ></i>
        <div className={styles["task-name"]} style={textStyle}>
          {task.title}
        </div>
      </div>
      <div className={styles["icons"]}>
        {isCompleted ? (
          <i
            className={editClass}
            onClick={() => alert("Completed Task can't be edited")}
          ></i>
        ) : (
          <i className={editClass} onClick={editTask}></i>
        )}
        <i className="fa-solid fa-trash" onClick={deleteTask}></i>
      </div>
    </div>
  );
};

export default TodoItem;
