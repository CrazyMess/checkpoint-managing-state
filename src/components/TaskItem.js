import React from "react";

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div>
      <h5>{task.name}</h5>
      <p className="mb-1">{task.description}</p>

      <button
        className="btn btn-warning btn-sm me-2"
        onClick={() => onEdit(task.id)}
      >
        Edit
      </button>

      <button
        className="btn btn-danger btn-sm me-2"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
      <button
        className={`btn btn-sm ${
          task.completed ? "btn-secondary" : "btn-success"
        }`}
        onClick={() => onToggleComplete(task.id)}
      >
        {task.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default TaskItem;
