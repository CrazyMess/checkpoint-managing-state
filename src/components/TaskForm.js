import React, { useEffect, useState } from "react";

const TaskForm = ({ onSubmit, initialTask, mode }) => {
  const [taskName, setTaskName] = useState(initialTask?.name || "");
  const [taskDescription, setTaskDescription] = useState(
    initialTask?.description || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      onSubmit({ name: taskName, description: taskDescription });
      setTaskName("");
      setTaskDescription("");
    } else {
      alert("both fields are required");
    }
  };

  useEffect(() => {
    if (initialTask) {
      setTaskName(initialTask.name);
      setTaskDescription(initialTask.description);
    }
  }, [initialTask]);
  return (
    <form onSubmit={handleSubmit} className="card p-4">
      <div className="mb-3">
        <label htmlFor="taskName" className="form-label">
          Task Name
        </label>
        <input
          type="text"
          className="form-control"
          id="taskName"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="taskDescription" className="form-label">
          Task Description
        </label>
        <textarea
          className="form-control"
          placeholder="Task Description"
          id="taskDescription"
          rows="3"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {mode === "edit" ? "Update task" : "Add task"}
      </button>
    </form>
  );
};

export default TaskForm;
