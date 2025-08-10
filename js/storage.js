/*
We use a fixed key task_manager_tasks to store tasks in Local Storage.
saveTasks(tasks) saves the array as a JSON string in Local Storage after a simulated delay.
getTasks() fetches and parses tasks from Local Storage after the delay.
Both methods return Promises, so we can await them in our app.
*/

const STORAGE_KEY = "task_manager_tasks";

export default class Storage {
  // Simulate async saving with a small delay
  static saveTasks(tasks) {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        resolve();
      }, 300); // 300ms delay to simulate async operation
    });
  }

  // Simulate async loading with a small delay
  static getTasks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const tasksJson = localStorage.getItem(STORAGE_KEY);
        if (tasksJson) {
          const tasksArray = JSON.parse(tasksJson);
          resolve(tasksArray);
        } else {
          resolve([]);
        }
      }, 300); // 300ms delay
    });
  }
}
