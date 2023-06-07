import updateLocalStorage from './updateLocalStorage.js';
import renderTodoList, { tasks } from './renderTodoList.js';

// const updateLocalStorage = () => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// };

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

// window.addEventListener('DOMContentLoaded', () => {
//     const taskForm = document.getElementById('task-form');
//     taskForm.addEventListener('submit', addTask);

//     const storedTasks = localStorage.getItem('tasks');
//     if (storedTasks) {
//       tasks = JSON.parse(storedTasks);
//     }
//     updateLocalStorage();
//     renderTodoList();
//   });

export default addTask;