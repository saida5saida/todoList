const inputTitle = document.querySelector('.input-title');
const todoDescription = document.querySelector('#todo-description');
const todoArea = document.querySelector('.todo-area');
// console.log(todoArea)

function keycodesClick(e) {
  if (e.keyCode === 27) {
    clearInputContent();
  }
  else if (e.keyCode === 13 && !e.shiftKey) {
    const titleContent = inputTitle.value;
    const descriptionContent = todoDescription.value;
    addTodo(titleContent, descriptionContent);
    e.preventDefault();
  }
}

function titleClick(e) {
  // console.log(this)
  this.parentElement.classList.toggle('todo-item-close')
}


let idCounter = 0;
function addTodo(title, description) {
  const id = "todo-" + idCounter++;
  const todoItem = createTodoItem(title, description, id);
  todoArea.appendChild(todoItem);
  clearInputContent();
}


function createTodoItem(title, description, id) {
  const todoContent = `<div class="todo-title">
      <div class="todo-title-name">
      ${title}
      </div>
      <div>
          <i delete-target = "${id}" class="todo-icon far fa-times-circle"></i>
      </div>
  </div>
  <div class="todo-text">
      <div class="todo-text-desription">
      ${description}
      </div>
 </div>`;
  const newTodoItem = document.createElement("div");
  newTodoItem.className = 'todo-item todo-item-close'
  newTodoItem.id = id
  newTodoItem.innerHTML = todoContent
  newTodoItem.firstElementChild.onclick = titleClick
  return newTodoItem
}

function clearInputContent() {
  inputTitle.value = "";
  todoDescription.value = "";
}



todoArea.addEventListener("click", (e) => {
  const isDeleteIcon = e.target.hasAttribute("delete-target");
  if (isDeleteIcon) {
    const todoId = e.target.getAttribute("delete-target");
    document.querySelector("#" + todoId).remove();
  }
});


inputTitle.addEventListener("keydown", keycodesClick)
todoDescription.addEventListener("keydown", keycodesClick)
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 90 && e.ctrlKey) {
    todoArea.lastElementChild.remove();
  }
});


