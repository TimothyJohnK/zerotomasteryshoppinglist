var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var list = document.getElementsByTagName('li');

function inputLength() {
  return input.value.length;
}

function done(e) {
  e.target.classList.toggle('done');
}

function removeParent(e) {
  e.target.parentNode.remove();
}

function addDeleteBtn(el) {
  let btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Delete'));
  btn.classList.add('delete');
  btn.onclick = removeParent;
  el.appendChild(btn);
}

for (i = 0; i < list.length; i++) {
  list[i].setAttribute('id', list[i].innerText);
  list[i].appendChild;
  list[i].onclick = done;
  addDeleteBtn(list[i]);
}

function createListElement() {
  let li = document.createElement('li');
  li.setAttribute('id', input.value);
  li.onclick = done;
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  addDeleteBtn(li);
  input.value = '';
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);
