interface Todo {
  text: string;
  isChecked: boolean;
}

const btn = document.querySelector("button")!;
const todoInput = document.querySelector<HTMLInputElement>("#todo-input")!;
const todoForm = document.querySelector("form")!;
const todoList = document.querySelector("ul")!;
let todoStorage: Todo[] = readTodos();

todoStorage.forEach(createTodoList);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  }
  return [];
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todoStorage));
}

function handleSubmit(e: SubmitEvent): void {
  e.preventDefault();

  const thisTodo: Todo = {
    text: todoInput.value,
    isChecked: false,
  };

  createTodoList(thisTodo);
  todoStorage.push(thisTodo);
  saveTodos()

  alert(`${todoInput.value} added to the list!`);
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleSubmit);

function createTodoList(todo: Todo): void {
  const newTodoText = todo.text;
  const newLi = document.createElement("li");
  const newCheckbox = document.createElement("input");
  const newP = document.createElement("p");

  newCheckbox.type = "checkbox";
  newCheckbox.addEventListener("change", () => {
    todo.isChecked = newCheckbox.checked;
    saveTodos()
  });

  if (todo.isChecked === true) {
    newCheckbox.setAttribute("checked", "");
  }
  newP.innerText = newTodoText;

  newLi.append(newP, newCheckbox);
  todoList.append(newLi);
}
