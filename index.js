// selectors
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("todo-list");
const filter = document.getElementById("filter-todo");

// Event listeners
addBtn.addEventListener("click", addTodo);
listContainer.addEventListener("click", taskbtns);
filter.addEventListener("change", filterTodo);

// functions

function createComponents(value) {
    // div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // list
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerHTML = value;
    todoDiv.appendChild(newTodo);

    // check-btn
    const checkbtn = document.createElement("button");
    checkbtn.classList.add("check-btn");
    checkbtn.innerHTML = "<i class='fa-solid fa-check fa-sm'></i>";
    todoDiv.appendChild(checkbtn);

    // trashbtn
    const trashbtn = document.createElement("button");
    trashbtn.classList.add("trash-btn");
    trashbtn.innerHTML = "<i class='fa-solid fa-trash fa-2xs'></i>";
    todoDiv.appendChild(trashbtn);

    listContainer.appendChild(todoDiv);
}

function addTodo(e) {
    if (inputBox.value === "") {
        alert("Please enter a task");
        return;
    }

    createComponents(inputBox.value);

    inputBox.value = "";
}

function taskbtns(e) {
    const item = e.target;
    const todo = item.parentElement;
    console.log(item);

    // delete
    if (item.classList[0] === "trash-btn")
        todo.remove();
    else if (todo.classList[0] === "trash-btn")
        todo.parentElement.remove();

    // strike
    if (item.classList[0] === "check-btn")
        todo.classList.toggle("checked");
    else if (todo.classList[0] === "check-btn")
        todo.parentElement.classList.toggle("checked");
}

function filterTodo(e) {
    const value = e.target.value;
    const todos = Array.from(listContainer.children); // Convert the HTMLCollection to an array
    console.log(todos);

    todos.forEach(function (todo) {
        switch (value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            default:
                break;
        }
    });
}
