// eslint-disable-next-line import/no-cycle
import { tasks } from './renderTodoList.js';

const updateLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default updateLocalStorage;