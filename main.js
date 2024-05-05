let editingTask = null;

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const ul = document.getElementById('ul');

  if (taskInput.value !== "") {
    if (editingTask) {
      editingTask.querySelector('span').textContent = taskInput.value;
      document.querySelector('button').textContent = '登録';
      editingTask = null;
    } else {
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = taskInput.value;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      deleteButton.onclick = function () {
        deleteTask(this);
      };

      const editButton = document.createElement('button');
      editButton.textContent = '編集';
      editButton.onclick = function () {
        editTask(this);
      };

      li.appendChild(span);
      li.appendChild(editButton);
      li.appendChild(deleteButton);

      ul.appendChild(li);
    }

    taskInput.value = "";
  }
}

function deleteTask(button) {
  const li = button.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
}

function editTask(button) {
  const li = button.parentNode;
  const span = li.querySelector('span');
  const taskInput = document.getElementById('taskInput');
  
  taskInput.value = span.textContent;
  editingTask = li;
  document.querySelector('button').textContent = '更新';
}
