// const toDoForm = document.querySelector('.js-toDoForm'),
//   toDoInput = toDoForm.querySelector('input'),
//   toDoList = document.querySelector('.js-toDoList');

// const TODOS_LS = 'toDos';

// let toDos = [];

// function deleteTodo(event) {
//   const btn = event.target;
//   const li = btn.parentNode;
//   toDoList.removeChild(li);
//   const cleanToDos = toDos.filter(function (toDo) {
//      return toDo.id !== parseInt(li.id);
//   });
//   console.log(cleanToDos);
// }

// // toDos를 가져와서 local에 저장하는 역할
// function saveToDos() {
//   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
//   //  JSON.stringfy object => string changed
// }

// /* when submit , list - add / remove  */

// function paintToDo(text) {
//   const span = document.createElement('span');
//   const newId = toDos.length + 1;
//   const delBtn = document.createElement('button');
//   const li = document.createElement('li');
//   delBtn.innerText = '❌';
//   delBtn.addEventListener('click', deleteTodo);
//   span.innerText = text;
//   li.appendChild(delBtn);
//   li.appendChild(span);
//   li.id = newId;
//   toDoList.appendChild(li);
//   const toDoObj = {
//     text: text,
//     id: newId,
//   };
//   toDos.push(toDoObj);
//   saveToDos();
// }

// function handleSubmit(e) {
//   e.preventDefault();
//   const currentValue = toDoInput.value;
//   paintToDo(currentValue);
//   toDoInput.value = ''; // value enter => submit
// }

// /* 새로고침해도 todos 저장 */
// function loadToDos() {
//   const loadToDos = localStorage.getItem(TODOS_LS);
//   if (loadToDos !== null) {
//     // toDos []이 빈배열이 아니면
//     // svaeToDos에서 string으로 변환했기때문에 다시 Obj으로변환
//     const parsedToDos = JSON.parse(loadToDos);
//     parsedToDos.forEach(function (toDo) {
//       paintToDo(toDo.text);
//     });
//   }
// }
// function init() {
//   toDoForm.addEventListener('submit', handleSubmit);
//   loadToDos();
// }
// init();
