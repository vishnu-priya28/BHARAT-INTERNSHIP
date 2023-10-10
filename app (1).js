// Sample data for tasks, users, and messages
let tasks = [];
let users = [];
let messages = [];

// Task form and list elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const assigneeSelect = document.getElementById('assignee-select');
const taskList = document.getElementById('task-list');

// User form and list elements
const userForm = document.getElementById('user-form');
const userInput = document.getElementById('user-input');
const userList = document.getElementById('user-list');

// Chat form and list elements
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}

// Function to render users
function renderUsers() {
  userList.innerHTML = '';
  assigneeSelect.innerHTML = '<option value="">Assignee</option>';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user;
    userList.appendChild(li);

    // Add user as an option in assignee select
    const option = document.createElement('option');
    option.value = user;
    option.textContent = user;
    assigneeSelect.appendChild(option);
  });
}

// Function to render chat messages
function renderMessages() {
  messageList.innerHTML = '';
  messages.forEach(message => {
    const li = document.createElement('li');
    li.textContent = message;
    messageList.appendChild(li);
  });
}

// Event listener for task form submission
taskForm.addEventListener('submit', e => {
  e.preventDefault();
  const task = taskInput.value.trim();
  const assignee = assigneeSelect.value;
  if (task !== '' && assignee !== '') {
    tasks.push(`${task} (Assigned to: ${assignee})`);
    renderTasks();
    taskInput.value = '';
    assigneeSelect.value = '';
  }
});

// Event listener for user form submission
userForm.addEventListener('submit', e => {
  e.preventDefault();
  const user = userInput.value.trim();
  if (user !== '') {
    users.push(user);
    renderUsers();
    userInput.value = '';
  }
});

// Event listener for message form submission
messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message !== '') {
    messages.push(message);
    renderMessages();
    messageInput.value = '';
  }
});

// Initial rendering of tasks, users, and messages
renderTasks();
renderUsers();
renderMessages();