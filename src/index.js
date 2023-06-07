import './style.css';
import updateLocalStorage from './modules/updateLocalStorage.js';
import renderTodoList, { tasks } from './modules/renderTodoList.js';
import addTask from './modules/addTasks.js';

window.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', addTask);

  const storedTasks = localStorage.getItem('tasks');
  const parseTasks = storedTasks ? JSON.parse(storedTasks) : [];
  tasks.push(...parseTasks);

  updateLocalStorage();
  renderTodoList();
});
