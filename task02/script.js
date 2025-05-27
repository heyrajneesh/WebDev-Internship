document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // prevent toggle when removing
    li.remove();
  });

  li.appendChild(removeBtn);
  document.getElementById('task-list').appendChild(li);
  taskInput.value = '';
}
