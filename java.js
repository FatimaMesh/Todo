const todoContainer = document.getElementsByTagName("main")[0];
const timeContainer = document.getElementById("digital_clock");
let todo = [];

setInterval(digitalClock, 1000);

function digitalClock() {
  const date = new Date();
  timeContainer.textContent = date.toLocaleTimeString();
}

function CreateTodoContainer() {
  for (let list of todo) {
    let div = document.createElement("div");
    let { id, title, completed } = list;
    let checked = "";
    if (completed) {
      checked = "checked";
    }
    div.innerHTML = `<h2 class="card_id">${id}</h2><label for="list"></label> <input type="checkbox" name="list" id="list" ${checked}/><p class='${checked} card_title'>${title}</p>`;
    todoContainer.appendChild(div);
    div.classList = "card";
  }
}

const TodoListFetch = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (!response.ok) {
        throw "There is something wrong ..!";
      }
      return response.json();
    })
    .then((data) => {
      todo = data;
    })
    .then(() => CreateTodoContainer())
    .catch((error) => console.error("Error:", error));
};

TodoListFetch();
