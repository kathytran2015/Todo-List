var todoForm = document.getElementById("todoForm");
var todoList = document.getElementById("todoList");
var newTodo  = document.getElementById("newTodo");

var date = new Date();
var writedate = date.toLocaleDateString();
document.getElementById("monthsdate").innerHTML = writedate;

function textWeekday() {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[date.getDay()]
}
document.getElementById("wordday").innerHTML = textWeekday();

Date.prototype.moveDate = function(days) {
  this.setDate(this.getDate() + days);
  document.getElementById("monthsdate").innerHTML = this.toLocaleDateString();
  document.getElementById("wordday").innerHTML = textWeekday();
}

function crossOutOrDelete(e) {
  if (this.classList.contains("cross-out")) {
    this.remove() ;
  } else {
    this.classList.add("cross-out");
  }

}

todoForm.onsubmit = function (e) {
  event.preventDefault();
  var newTodoItem = document.createElement("li"); // create new todo item
  newTodoItem.setAttribute("class", "todo-item") // add a class
  newTodoItem.innerHTML = newTodo.value // change the value to input value
  newTodoItem.addEventListener("click", crossOutOrDelete,); 
  todoList.appendChild(newTodoItem); // append the li item to the ul
  newTodo.value = "" // input value is resetted to none
}

function openSchedule(evt, tabSched) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabSched).style.display = "block";
  evt.currentTarget.className += " active";
}