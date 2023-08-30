import { addTask } from "./actions";
import { Task, compileTasks } from "./helper";
import "../css/style.css";

export const list = document.querySelector<HTMLUListElement>(".list-items");
const form = document.querySelector<HTMLFormElement>("#add-new-task-form");
export const titleInput =
  document.querySelector<HTMLInputElement>("#new-task-title");
export const desInput = document.querySelector<HTMLInputElement>(
  "#new-task-description"
);

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
