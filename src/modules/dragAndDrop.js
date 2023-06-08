// eslint-disable-next-line import/no-cycle
import renderTodoList, { tasks } from './renderTodoList.js';
import updateLocalStorage from './updateLocalStorage.js';

let dragSource = null;

export const handleDragStart = (e) => {
  dragSource = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.outerHTML);
  e.target.classList.add('dragging');
};

export const handleDragOver = (e) => {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';
  return false;
};

export const handleDragEnter = (e) => {
  e.target.classList.add('dragover');
};
export const handleDragLeave = (e) => {
  e.target.classList.remove('dragover');
};

export const swapTasks = (oldIndex, newIndex) => {
  const temp = tasks[oldIndex];
  tasks[oldIndex] = tasks[newIndex];
  tasks[newIndex] = temp;
//   renderTodoList()
};

export const handleDrop = (e) => {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSource !== e.target) {
    const dropIndex = parseInt(e.target.getAttribute('data-index'), 10);
    const dragIndex = parseInt(dragSource.getAttribute('data-index'), 10);
    swapTasks(dragIndex, dropIndex);
    updateLocalStorage();
    renderTodoList();
  }

  return false;
};

export const handleDragEnd = (e) => {
  e.target.classList.remove('dragging');
  const listItems = document.querySelectorAll('#todo-list li');
  listItems.forEach((listItem) => {
    listItem.classList.remove('dragover');
  });
};
