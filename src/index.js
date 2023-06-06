import './style.css';

let tasks = [];

const updateLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const renderTodoList = () => {
  const todoListElement = document.getElementById('todo-list');
  todoListElement.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index', index);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      updateLocalStorage();
      renderTodoList();
    });

    const input = document.createElement('input');
    input.classList.add('items');
    input.type = 'text';
    input.value = task.description;
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const newDescription = input.value.trim();
        if (newDescription !== '') {
          task.description = newDescription;
          updateLocalStorage();
          renderTodoList();
        }
      }
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(input);

    if (task.completed) {
      listItem.classList.add('completed');
    }

    todoListElement.appendChild(listItem);
  });
  const clearCompletedTasks = (e) => {
    e.preventDefault();
    tasks = tasks.filter((task) => !task.completed);
    updateLocalStorage();
    renderTodoList();
  };

  const clearCompleted = document.createElement('a');
  clearCompleted.classList.add('clear-items');
  clearCompleted.textContent = 'Clear All Completed';
  clearCompleted.href = '#';
  clearCompleted.addEventListener('click', clearCompletedTasks);
  todoListElement.appendChild(clearCompleted);
};

const addTask = (e) => {
  e.preventDefault();
  const taskInput = document.getElementById('task-input');
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== '') {
    const newTask = {
      description: taskDescription,
      completed: false,
    };

    tasks.push(newTask);
    updateLocalStorage();
    taskInput.value = '';
    renderTodoList();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', addTask);

  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }

  renderTodoList();
});
