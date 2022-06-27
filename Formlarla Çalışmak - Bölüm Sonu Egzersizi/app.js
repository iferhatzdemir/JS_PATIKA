let userFormDom = document.querySelector("#userForm");
userFormDom.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const score = document.querySelector("#score");

  if (USER_NAME.value != "" && score.value != "") {
    addItem(USER_NAME.value, score.value);
    userName.value = "";
    score.value = "";
    alert("Ka ydınız Başarılı");
  } else {
    alert("Lütfen Eksik alanları doldurunuz");
  }
}

const userListDOM = document.querySelector("#userList");
const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `  ${userName} <span class="badge bg-primary rounded-pill">${score}</span>
`;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDOM.append(liDOM);
};
