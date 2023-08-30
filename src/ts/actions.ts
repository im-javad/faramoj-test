import { desInput, titleInput } from "./elements";
import { tasks } from "./events";
import { Task, compileTasks } from "./helper";

/**
 * Add task to session storage and page
 *
 * @param title
 * @param description
 */
export const addTask = (title: string, description: string): void => {
  const newTask: Task = {
    id: Math.floor(Math.random() * 999999).toString(),
    title,
    description,
    completed: false,
    createdAt: new Date(),
    lastUpdateAt: "never",
  };

  tasks.push(newTask);
  addToSessionStorage(tasks);
  if (titleInput) titleInput.value = "";
  if (desInput) desInput.value = "";
};

/**
 * Add a task to the session storage
 *
 * @param tasks
 */
export const addToSessionStorage = (tasks: Task[]): void => {
  sessionStorage.setItem("TASKS", JSON.stringify(tasks));
  compileTasks(tasks);
};

/**
 * Task status update and updated time setting
 *
 * @param id
 */
export const toggle = (id: string) : void => {
  tasks.forEach((task: Task) => {
    if (task.id == id) {
      task.completed = !task.completed;
      task.lastUpdateAt = new Date();
    }
  });
  addToSessionStorage(tasks);
};
