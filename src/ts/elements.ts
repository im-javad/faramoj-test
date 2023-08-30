/**
 * List element to manage tasks
 */
export const list = document.querySelector<HTMLUListElement>(".list-items");

/**
 * Form element to adding new task
 */
export const form =
  document.querySelector<HTMLFormElement>("#add-new-task-form");

/**
 * Title input element to get the desired title from value input
 */
export const titleInput =
  document.querySelector<HTMLInputElement>("#new-task-title");

/**
 * Description input element to get the desired description from value input
 */
export const desInput = document.querySelector<HTMLInputElement>(
  "#new-task-description"
);
