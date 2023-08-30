import { list } from "./elements";

/**
 * For all of tasks
 */
export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  lastUpdateAt: Date | "never";
};

/**
 * Rendering each task separately and completely and placing it on the page
 *
 * @param task
 */
export const renderTask = (task: Task) : void => {
  const checked = task.completed ? "checked" : null;

  const item = document.createElement("li");
  item.className = "item";
  item.setAttribute("item-key", task.id);

  item.innerHTML = `
    <div>
      <input type="checkbox" class="item-status" ${checked} />
      <strong class="item-title">${task.title}:</strong>
      <span class="item-description">${task.description}</span>
      <button class="item-remove">🗑️</button>
    </div>
    <div>
      <span class="item-date">Created at: ${dateFormatter(
        task.createdAt
      )}</span>
      ${
        task.lastUpdateAt == "never"
          ? `<span class="item-date">Updated at: This task has not been updated yet</span>`
          : `<span class="item-date">Updated at: ${dateFormatter(
              task.lastUpdateAt
            )}</span>`
      }
    </div>
  `;

  list?.appendChild(item);
};

/**
 * Date formating example 07:77 - 07.Aug 2077
 *
 * @param date
 */
export const dateFormatter = (date: Date): string => {
  return (
    date.getHours() +
    ":" +
    date.getMinutes() +
    " - " +
    date.getDate() +
    ". " +
    date.toLocaleString("default", { month: "short" }) +
    " " +
    date.getFullYear()
  );
};

/**
 * Rendering all tasks and adding to DOM
 *
 * @param tasks
 */
export const compileTasks = (tasks: Task[]): void => {
  if (list) list.innerHTML = "";
  tasks.forEach((task) => {
    renderTask(task);
  });
};

