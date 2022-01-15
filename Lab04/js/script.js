let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

function TodoPost(e){
      e.preventDefault()
      let todo = document.getElementById("todoText").value
      let list = document.getElementById("todoList")

      let div = document.createElement("div")
      let input = document.createElement("input")
      let label = document.createElement("label")

      input.type = "checkbox"
      input.name = "todo"

      label.textContent = todo

      div.appendChild(input)
      div.appendChild(label)

      list.appendChild(div)

}

function TodoClear(){
      let todos = document.getElementsByName("todo")
      todos.forEach(todo => todo.checked = false)
      
}

function TodoMark(){
      let todos = document.getElementsByName("todo")
      todos.forEach(todo => todo.checked = true)
}

function TodoDel(){
      let todos = document.getElementsByName("todo")
      todos.forEach(todo => {if(todo.checked) {
            todo.parentElement.remove()
      }
})
      
}