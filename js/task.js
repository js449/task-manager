/*
The constructor takes an id, description, and optional completed status.
toggleComplete() method switches the completion status.
updateDescription() allows updating the task text.
*/

export default class Task {
  constructor(id, description, completed = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  updateDescription(newDescription) {
    this.description = newDescription;
  }
}
