import { useState } from "react";
import styles from "./App.module.css";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [task, setTask] = useState([]);

  const addTodo = () => {
    let newTask = document.getElementById("new-task");
    let newTaskObj = {
      completed: false,
      title: newTask.value,
      id: Date.now(),
    };
    task.push(newTaskObj);
    setTask(task);
    newTask.value = "";
  };

  return (
    <div className={styles.app}>
      <div className={styles["todo-bar-container"]}>
        <div className={styles["todo-bar"]}>
          <div
            style={{ borderRadius: "10px 0 0 10px" }}
            className={styles["icon-container"]}
          >
            <i className="fa-solid fa-list"></i>
          </div>
          <input
            id="new-task"
            type={"text"}
            placeholder="Enter the task"
            autoComplete="off"
          />
          <div
            style={{ borderRadius: "0 10px 10px 0" }}
            className={styles["icon-container"]}
            id="add-btn"
            onClick={addTodo}
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      {/* Todo Container Component */}
      <TodoContainer addedTask={task} />
    </div>
  );
}

export default App;
