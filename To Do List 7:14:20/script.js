var todoInput = document.querySelector("#todo_text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo_count");
var submitBtn = document.querySelector("#submit");


var items = [];
var count =0

function addToDoItems(event){
    event.preventDefault();
    var todo_text = todoInput.value;
    if (todo_text =="" || todo_text==" "){
        alert("ERROR: Nothing was entered. Please try again.")
    }
   else{
    items+= todo_text;
    var li = document.createElement("li");
    li.innerHTML = todo_text;
    todoList.append(li);
    console.log(items);
    count++
    var todo_count = count;
    console.log(todo_count);
    todoCountSpan.textContent = todo_count;
   }
}



submitBtn.addEventListener("click", addToDoItems);
