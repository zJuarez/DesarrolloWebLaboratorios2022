const agregar = document.getElementById('agregar');

agregar.onclick = function(event) {
  event.preventDefault();
  const text = document.getElementById('newText');
  const value = text.value;
  const ul = document.getElementById('list');
  const li = document.createElement('div')
  li.setAttribute('class', 'li');
  const h3 = document.createElement('h3');
  const check = document.createElement('div')
  check.setAttribute('class', 'button check');
  const del = document.createElement('div')
  del.setAttribute('class', 'button dele');

  check.innerHTML = 'check'
  del.innerHTML = 'delete'
  h3.innerHTML = value;

  li.appendChild(h3);
  li.appendChild(check);
  li.appendChild(del);
  ul.appendChild(li);

  check.onclick =
      function(event) {
    event.preventDefault;
    h3.classList.toggle('checked')
  }

      del.onclick = function(event) {
    event.preventDefault;
    ul.removeChild(li);
  } 
  text.value = ''
  console.log(value);
}
