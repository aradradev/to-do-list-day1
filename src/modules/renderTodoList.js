import updateLocalStorage from './updateLocalStorage.js';

export const tasks = [];
  
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

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>';

    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      updateLocalStorage();
      renderTodoList();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(input);
    listItem.appendChild(deleteButton);

    if (task.completed) {
      listItem.classList.add('completed');
    }

    todoListElement.appendChild(listItem);
  });
  const clearCompletedTasks = (e) => {
    e.preventDefault();
    const filteredTasks = tasks.filter((task) => !task.completed);
    tasks.splice(0, tasks.length, ...filteredTasks);
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

export default renderTodoList;
