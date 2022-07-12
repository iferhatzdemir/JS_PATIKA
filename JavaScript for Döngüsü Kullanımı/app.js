let users = ["ahmet", "mehmet", "ramazan", "mustafa"];
let listDom = document.querySelector("userList");
for (var i = 0; i < users.length; i++) {
  let liDom = document.createElement("li");
  console.log(users[i]);
  liDom.innerHTML = users[i];
  liDom.append();
}
