let users = ["ahmet", "mehmet", "ramazan", "mustafa"];
let userListDOM = document.querySelector("#userList");
for (var i = 0; i < users.length; i++) {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = users[i];
  userListDOM.appendChild(liDOM);
}

// For Dongusu
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide/Loops_and_iteration

// for ([başlangıçAtaması]; [koşulİfadesi]; [arttırımİfadesi]) {
// yapilacak islem
// }

// let users = ["Lorem", "Ipsum", "Dolor"];

// // for (let index = 0; index < 10; index++) {
// //   console.log(index)
// // }

// // let index = 0

// // for (; index < 10; index++) {
// //   console.log(index)
// // }

// const userListDOM = document.querySelector("#userList");

// for (index = 0; index < users.length; index++) {
//   const liDOM = document.createElement("li");
//   liDOM.innerHTML = users[index];
//   userListDOM.appendChild(liDOM);
// }
