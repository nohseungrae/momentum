const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  li.appendChild(span);
  todoList.appendChild(li);
};

const handleTodoSubmit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  paintTodo(newTodo);
  todoInput.value = "";
};

todoForm.addEventListener("submit", handleTodoSubmit);
