import updateLocalStorage from './updateLocalStorage.js';
import { handleDragEnter, handleDragOver, handleDragStart, handleDrop, handleDragEnd, handleDragLeave } from './dragAndDrop.js';

export const tasks = [];
  
const renderTodoList = () => {
  const todoListElement = document.getElementById('todo-list');
  todoListElement.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index', index);

    listItem.setAttribute('draggable', true);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkedBtn')
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

      //update the index of the remaining tasks
      tasks.forEach((task, newIndex) => {
        task.index = newIndex + 1;
      })
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
    tasks.forEach((task, newIndex) => {
      task.index = newIndex + 1;
    })
    updateLocalStorage();
    renderTodoList();
  };

  const clearCompleted = document.createElement('button');
  clearCompleted.classList.add('clear-items');
  clearCompleted.textContent = 'Clear All Completed';
  clearCompleted.addEventListener('click', clearCompletedTasks);
  todoListElement.appendChild(clearCompleted);

  if (tasks.length === 0) {
    clearCompleted.style.display = 'none;'
  } else {
    clearCompleted.style.display = 'block'
  }

  const listItems = document.querySelectorAll('#todo-list li');
    listItems.forEach((listItem) => {
        listItem.addEventListener('dragstart', handleDragStart);
        listItem.addEventListener('dragover', handleDragOver);
        listItem.addEventListener('dragenter', handleDragEnter);
        listItem.addEventListener('dragleave', handleDragLeave);
        listItem.addEventListener('drop', handleDrop);
        listItem.addEventListener('dragend', handleDragEnd);
    })
};

export default renderTodoList;
