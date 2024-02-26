const todoContainer = document.getElementsByTagName("main")[0];
let todo = [];

function CreateTodoContainer() {
    for(let list of todo){
  let div = document.createElement("div");
  let { id, title, completed } = list;
  let checked = "";
  if (completed){
    checked = 'checked';
  }
    div.innerHTML = `<h2 class="card_id">${id}</h2> <input type="checkbox" name="list" ${checked}/><p>${title}</p>`;
  todoContainer.appendChild(div);
  div.classList = "card";
    }
}
const TodoListFetch = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
        todo = data;
    })
    .then(()=> CreateTodoContainer())
    .catch((error) => console.error("Error:", error));
};

TodoListFetch();
