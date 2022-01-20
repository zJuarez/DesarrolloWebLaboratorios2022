const agregar = document.getElementById('agregar');
agregar.onclick = function(event) {
  event.preventDefault();
  const text = document.getElementById("newText");
  const value = text.value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  ul.appendChild(li);
  text.value = ""
  console.log(value);
  
}
