//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



//Functions

function addTodo(event){

    // Prevent form from submitting
    event.preventDefault();
    
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn"); //maybe this needs to change to trash-btn
    todoDiv.appendChild(trashButton);

    // APPEND THE DIV WE CREATED ABOVE TO THE TODO-LIST UL
    todoList.appendChild(todoDiv);

    // After a new item is appended to the list, clear the value from todoInput
    todoInput.value = "";

}


function deleteCheck(e) {
    const item = e.target;
    //Delet Todo
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //CSS Fall animation makes item appear to fall off list
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    //Check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}