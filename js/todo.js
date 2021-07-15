const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let todos = [];

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

const deleteTodo = (e) => {
  const li = e.target.parentElement;
  li.remove();
  console.log(li.id,todos);
  todos = todos.filter(item => item.id !== parseInt(li.id));
  saveTodos();
}

const paintTodo = (newTodoObj) => {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener("click",deleteTodo)
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
};

const handleTodoSubmit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now()
  }
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
};

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos)
const addTodos = (el) => {
  paintTodo(el);
}

if(savedTodos){
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(addTodos)
}
