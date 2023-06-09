// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// Funções
const saveTodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

   //console.log(todo);

   const doneBtn = document.createElement("button")
   doneBtn.classList.add("finish-todo")
   doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
   todo.appendChild(doneBtn)

   const editBtn = document.createElement("button")
   editBtn.classList.add("edit-todo")
   editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
   todo.appendChild(editBtn)

   const deleteBtn = document.createElement("button");
   deleteBtn.classList.add("remove-todo");
   deleteBtn.innerHTML = ` <i class="fa-solid fa-xmark"></i>`;
   todo.appendChild(deleteBtn)

   todoList.appendChild(todo);

   //Limpa depois que adiciona o campo
   todoInput.value = "";
   todoInput.focus();  
};

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3")

        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    });
};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

   // console.log("Enviou form")

    const inputValue = todoInput.value;

    // Vai Pegar o valor do input
   if(inputValue){
    //console.log(inputValue);
    // save todo
    saveTodo(inputValue);
   } 
});

document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")){
       // console.log("clicou para finalizar");
       parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
        //removve o elemento pai
    }

    if(targetEl.classList.contains("edit-todo")){
        toggleForms();
        //console.log("Editou")

       editInput.value = todoTitle;
       oldInputValue = todoTitle;
       //Salvando a Variavel pra depois fazer alteração
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue){
        //atualizar
        updateTodo(editInputValue)
    }

    toggleForms()
})
