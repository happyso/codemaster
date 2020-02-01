const toDoForm = document.querySelector(".js-toDoform"),
    toDoList = document.querySelector(".js-toDoList"),
    toDoInput = toDoForm.querySelector("input");

const TODOS_LS = "toDos";

let toDosArr = [];

function DeleteToDo(event) {
    const li = event.target.parentNode;
    const liId = li.id;
    toDoList.removeChild(li);
    toDosArr = toDosArr.filter((e) => {
        return parseInt(liId) !== e.id
    });
    saveToDos();
}


function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDosArr));
}
function paintToDo(text) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDosArr.length + 1;
    deleteBtn.innerText = "x";
    deleteBtn.addEventListener("click", DeleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id: newId
    };
    toDosArr.push(toDoObj);
    saveToDos();
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null){
        const parseToDos = JSON.parse(toDos);
        parseToDos.forEach(function (toDos) {
            paintToDo(toDos.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();