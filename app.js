// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event) {
    // prevent form from submitting.
    event.preventDefault();
    // create todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create <li>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check" ></i>';
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);
    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash" ></i>';
    deleteBtn.classList.add('delete-btn');
    todoDiv.appendChild(deleteBtn);
    // Append to <ul>
    todoList.appendChild(todoDiv);
    // clear TodoInput.value
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;

    // Delete Todo Item
    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        // add class for animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    // Mark off Item
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
// filter todo items based on dropdown menu.
function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(event.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}