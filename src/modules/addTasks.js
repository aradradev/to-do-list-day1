import updateLocalStorage from './updateLocalStorage.js';
import renderTodoList, { tasks } from './renderTodoList.js';

const addTask = (e) => {
  e.preventDefault();
  const taskInput = document.getElementById('task-input');
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== '') {
    const newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length + 1,
    };

    tasks.push(newTask);
    updateLocalStorage();
    taskInput.value = '';
    renderTodoList();
  }
};

export default addTask;
