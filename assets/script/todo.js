let addItem = document.getElementById('addItem');
let todoList = document.getElementById('todoList');
let inputBox = document.getElementById('inputBox');

addItem.addEventListener('click', function() {
    var info = document.createElement('p');
    info.innerText = inputBox.value;
    todoList.appendChild(info);
    inputBox.value ="";

    info.addEventListener('click', function() {
        info.style.textDecoration = "line-through";
    });
    info.addEventListener('dblclick', function() {
        todoList.removeChild(info);
    });
});