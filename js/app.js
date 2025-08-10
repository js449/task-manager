// Import modules
import Task from "./task.js";
import Storage from "./storage.js";
import UI from "./ui.js";

/*
We keep an in-memory tasks array as our current state.
On page load, we initialize by loading tasks from Storage and rendering them with UI.
addTaskHandler creates a new task, adds it to the array, saves, and updates the UI.
toggleTaskHandler finds the task by ID, toggles its completion, saves, and updates UI.
deleteTaskHandler removes the task from the array, saves, and updates UI.
Event listeners for adding, toggling, and deleting tasks are set up in the UI module.
*/

// Array to hold tasks in memory
let tasks = [];

// Load tasks from storage on page load
const init = async () => {
  tasks = await Storage.getTasks();
  UI.renderTasks(tasks);
  UI.setupEventListeners(addTaskHandler, toggleTaskHandler, deleteTaskHandler);
};

// Handler to add new task
const addTaskHandler = async (description) => {
  if (!description) return;
  const id = Date.now().toString(); // Create a unique ID for the task
  const task = new Task(id, description); // Create new task object
  tasks.push(task); // Add to tasks array and update storage
  await Storage.saveTasks(tasks);
  UI.renderTasks(tasks); // Update UI
};

// Handler to toggle task completion
const toggleTaskHandler = async (id) => {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;
  task.toggleComplete();
  await Storage.saveTasks(tasks);
  UI.renderTasks(tasks);
};

// Handler to delete a task
const deleteTaskHandler = async (id) => {
  tasks = tasks.filter((t) => t.id !== id);
  await Storage.saveTasks(tasks);
  UI.renderTasks(tasks);
};

// Initialize app on page load
document.addEventListener("DOMContentLoaded", init);
