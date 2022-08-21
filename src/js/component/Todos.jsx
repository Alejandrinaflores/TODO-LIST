import React, { useEffect, useState } from "react";
import Task from "../component/Task.jsx";
import Title from "../component/Title.jsx";

const Todos = () => {
  const [tasks, setTasks] = useState([
    {
      task: "Hello World",
    },
  ]);

  useEffect(() => {
    const inputAddTask = document.getElementById("addTask");

    inputAddTask.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        setTasks([...tasks, { task: inputAddTask.value }]);
      }
    });
  });

  const handleDelete = (taskId) => {
    const newTodo = [...tasks];
    newTodo.splice(taskId, 1);
    setTasks(newTodo);
  };

  return (
    <div className="wrapper">
      <div className="todos">
        <div className="todos_title">
          <Title />
        </div>
        <div className="todos_container">
          <input
            id="addTask"
            type="text"
            placeholder="What needs to be done ?"
          />
          <div className="task_container">
            {tasks.length === 0 ? (
              <h1>No tasks, add a task</h1>
            ) : (
              tasks.map((value, index) => {
                return (
                  <div key={index} className="task_aligner">
                    <Task taskName={value.task} />
                    <button onClick={() => handleDelete(index)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </button>
                  </div>
                );
              })
            )}
          <div className="itemsLeft">
            { tasks.length } item left
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
