let todo = [];
let createBtn = document.querySelector("#creatingTodo");
let deleteAll = document.querySelector("#deletingTodo");

// let body = document.querySelector("body");
let allTodo = document.querySelector(".all-todo")

let ul = document.createElement("ul");

function createTodo() {

  if (todoInput.value === "") {
    alert("Please enter a todo item.");
    return;
  }
  else {

    
    todo.push(todoInput.value);
  console.log(todoInput.value);
  
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.innerText = "Delete";
    
    li.innerText = todoInput.value;
    ul.append(li, deleteBtn);
    
    li.style.cursor = "pointer";
    
    
    deleteBtn.addEventListener("click", function () {
      li.remove();
      deleteBtn.remove();
  });
  // Event

  li.addEventListener("click", function () {
    li.classList.toggle("line");
  });
  
}
  // todo = [];
  todoInput.value = "";
}



// Append to Body
function deleteAllTodo() {
  ul.innerHTML= "";
  todo = [];
}

allTodo.append(ul);
let todoInput = document.querySelector("#inputField");