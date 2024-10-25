export const ADD_TASK = "TASK_ADD";
export const REMOVE_TASK = "TASK_REMOVE";

export const addTask = (task) => ({
  type: "TASK_ADD",
  payload: {
    task,
  },
});

export const removeTask = (id) => ({
  type: "TASK_REMOVE",
  payload: {
    id,
  },
});
