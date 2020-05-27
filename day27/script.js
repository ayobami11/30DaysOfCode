let userInput = document.getElementById('user-input');
let createBtn = document.getElementById('create-task');
let tasks = document.getElementById('tasks');
let clearBtn = document.getElementById('clear');
let instruction = document.querySelector('#instruction');

// Event handlers
createBtn.addEventListener('click', addTask);
clearBtn.addEventListener('click', clearList);

// Event handler function to be invoked when a task is created
function addTask() {
    if (!userInput.value) {
        instruction.style.display = 'block';
    } else {
        instruction.style.display = 'none';

        let flexContainer = document.createElement('div');
        flexContainer.className = 'flex-container';
        tasks.appendChild(flexContainer);

        let taskContainer = document.createElement('div');
        taskContainer.className = 'task-container';
        flexContainer.appendChild(taskContainer);

        let task = document.createElement('input');
        task.type = 'text';
        task.className = 'task';
        task.disabled = true;
        taskContainer.appendChild(task);

        // Edit button
        let editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.innerHTML = 'Edit';
        taskContainer.appendChild(editBtn);        

        // Close button
        let closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        flexContainer.appendChild(closeBtn);

        // Adds the user's input to the list
        task.value = userInput.value;
        userInput.value = '';

        // Edits a task
        editBtn.addEventListener('click', () => {
            if (task.disabled) {
                task.disabled = false;
                task.focus();
                editBtn.innerHTML = 'Done';
            } else {
                task.disabled = true;
                task.blur();
                editBtn.innerHTML = 'Edit';
            }
        });

        //Deletes a task
        closeBtn.addEventListener('click', () => {
            flexContainer.style.display = 'none';
        }); 
    }
}

// Clear the contents of the list
function clearList() {
    tasks.innerHTML = '';
}