// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#todo-form");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


// Funções
const saveTodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoList.innerText = text;
    todo.appendChild(todoTitle);

   // console.log(todo);

   const doneBtn = document.createElement("button")
   doneBtn.classList.add("finish-todo")
};

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

   // console.log("Enviou form")

   const inputValue = todoInput.value;

    // Vai Pegar o valor do input
   if(inputValue){
    //console.log(inputValue);
    // save todo
    saveTodo(inputValue)
   }
})


// Eventos