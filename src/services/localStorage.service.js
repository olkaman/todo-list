export const saveInLocalStorage = (tasks) => {
  const tasksList = JSON.stringify(tasks);
  localStorage.setItem('My tasks', tasksList);
};

export const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('My tasks');
  return JSON.parse(tasks);
};
