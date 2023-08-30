import { addTask, addToSessionStorage, toggle } from "./actions";
import { Task, compileTasks } from "./helper";
import "../css/style.css";
import { desInput, form, list, titleInput } from "./elements";

/**
 * Store tasks across the app
 */
export let tasks: Task[] = [];

/**
 * Submit the form and add a new task to the program
 */
form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  if (
    titleInput?.value == "" ||
    titleInput?.value == null ||
    desInput?.value == "" ||
    desInput?.value == null
  ) {
    alert("Please fill all of the feilds...");
    return;
  }
  addTask(titleInput.value, desInput.value);
});

/**
 * Event logging for task completion or deletion
 */
list?.addEventListener("click", (e: Event) => {
  if ((e.target as HTMLTextAreaElement).type === "checkbox") {
    const id = (
      e.target as HTMLTextAreaElement
    ).parentElement?.parentElement?.getAttribute("item-key");
    if (id) toggle(id);
  }
  if ((e.target as HTMLTextAreaElement).classList.contains("item-remove")) {
    const id = (
      e.target as HTMLTextAreaElement
    ).parentElement?.parentElement?.getAttribute("item-key");
    if (id) removeTask(id);
  }
});

/**
 * Adding tasks from session storage to the program and re-rendering
 */
const getSessionStorageTasks = (): void => {
  const receivedTasks = sessionStorage.getItem("TASKS");
  if (receivedTasks) {
    tasks = JSON.parse(receivedTasks);
    compileTasks(tasks);
  }
};

/**
 * Adding tasks to the program from the storage session and calling the desired function
 */
getSessionStorageTasks;

/**
 * Removing task from page and session storage
 *
 * @param id
 */
const removeTask = (id: string) => {
  tasks = tasks.filter((task) => {
    return task.id != id;
  });
  addToSessionStorage(tasks);
};
