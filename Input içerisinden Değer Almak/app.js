let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault(); // default islemi engelledik...
  console.log("islem gerceklesti");
  let scoreInputDom = document.querySelector("#score");
  console.log(scoreInputDom.value);
  localStorage.setItem("Score", scoreInputDom.value);
}
let clearDom = document.querySelector("#clear");
clearDom.addEventListener("click", consoleClear);

function consoleClear() {
  console.clear();
  localStorage.clear();
}
//crate a function say hello world
