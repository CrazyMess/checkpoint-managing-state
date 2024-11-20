import React from "react";
import TaskItem from "./TaskItem";

export const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-muted"> No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? "list-group-item-success" : ""
              }`}
            >
              <TaskItem
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggleComplete={onToggleComplete}
              />
            </li>
          ))}
        </ul>
      )}
      {/*    {tasks.map((task) => (
          
            <TaskItem
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleComplete={onToggleComplete}
            />
          
        ))} */}
    </div>
  );
};

export default TaskList;
