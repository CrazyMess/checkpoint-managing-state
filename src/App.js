import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    navigate("/");
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask.id ? { ...task, ...updatedTask } : task
      )
    );
    setEditingTask(null);
    navigate("/");
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const ToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do-List</h1>
      <nav className="mb-4 text-center">
        <Link className="btn btn-primary me-2" to="/">
          Task List
        </Link>
        <Link className="btn btn-success" to="/add">
          Add task
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <TaskList
              tasks={tasks}
              onEdit={(id) => {
                setEditingTask(tasks.find((task) => task.id === id));
                navigate("/edit");
              }}
              onDelete={deleteTask}
              onToggleComplete={ToggleComplete}
            />
          }
        />
        <Route path="/add" element={<TaskForm onSubmit={addTask} />} />
        <Route
          path="/edit"
          element={
            <TaskForm
              onSubmit={editTask}
              initialTask={editingTask}
              mode="edit"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
