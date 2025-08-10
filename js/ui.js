/*
ui.js — User Interface Module

renderTasks:
Clears and rebuilds the entire UI each time it’s called for simplicity.
Adds an input box and button for adding new tasks.
Creates a list of tasks with checkbox, description, and delete button.
Applies a “completed” CSS class to tasks that are done.

setupEventListeners:
Uses event delegation on appDiv to listen for clicks and changes anywhere inside the app.
Handles adding new tasks by clicking the button or pressing Enter.
Handles toggling task completion via checkbox changes.
Handles deleting tasks via the delete buttons.
*/

// Cache DOM elements for reusability
const appDiv = document.getElementById("app");

export default class UI {
  // Render all tasks dynamically inside the app container
  static renderTasks(tasks) {
    // Clear existing content
    appDiv.innerHTML = "";

    // Create input area for adding new tasks
    const inputDiv = document.createElement("div");
    inputDiv.className = "input-container";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Add a new task...";
    input.id = "new-task-input";

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Task";
    addBtn.id = "add-task-btn";

    inputDiv.appendChild(input);
    inputDiv.appendChild(addBtn);
    appDiv.appendChild(inputDiv);

    // Create a container for the task list
    const list = document.createElement("ul");
    list.id = "task-list";
    appDiv.appendChild(list);

    // Populate tasks
    tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.className = "task-item";
      listItem.dataset.id = task.id;

      // Checkbox to toggle complete
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.className = "task-checkbox";

      // Task description text
      const taskText = document.createElement("span");
      taskText.textContent = task.description;
      taskText.className = task.completed ? "task-text completed" : "task-text";

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";

      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      listItem.appendChild(deleteBtn);

      list.appendChild(listItem);
    });
  }

  // Setup event listeners for add, toggle, and delete
  static setupEventListeners(addHandler, toggleHandler, deleteHandler) {
    // Add task button and input field
    appDiv.addEventListener("click", (e) => {
      if (e.target.id === "add-task-btn") {
        const input = document.getElementById("new-task-input");
        const description = input.value.trim();
        if (description) {
          addHandler(description);
          input.value = "";
        }
      }
    });

    // Toggle and delete task using event delegation on task list
    appDiv.addEventListener("change", (e) => {
      if (e.target.classList.contains("task-checkbox")) {
        const taskId = e.target.closest("li").dataset.id;
        toggleHandler(taskId);
      }
    });

    appDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const taskId = e.target.closest("li").dataset.id;
        deleteHandler(taskId);
      }
    });

    // Optional: Handle Enter key press for adding task
    appDiv.addEventListener("keypress", (e) => {
      if (e.target.id === "new-task-input" && e.key === "Enter") {
        const description = e.target.value.trim();
        if (description) {
          addHandler(description);
          e.target.value = "";
        }
      }
    });
  }
}
