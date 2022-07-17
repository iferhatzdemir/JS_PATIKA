const LOREM_LIST = [
  "lorem",
  "ipsum",
  "dolor",
  "amet",
  "consectetur,",
  "adipisicing",
  "elit",
];
// for (let index = 0; index < 10; index++) {
//   if (index == 7) {
//     break;
//   } else {
//     console.log(index);
//   }
// }

// for (let index = 0; index < 10; index++) {
//   if (index == 7) {
//     continue;
//   } else {
//     console.log(index);
//   }
// }

const UL_DOM = document.querySelector("#userList");
// for (let index = 0; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == "dolor") {
//     break; ;//break döngüyü bittirir
//   } else {
//     let liDOM = document.createElement("li");
//     liDOM.innerHTML = LOREM_LIST[index];
//     UL_DOM.appendChild(liDOM);
//   }
// }
for (let index = 0; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] == "dolor") {
    continue; //continue ile bunu atla diyebilitiz
  } else {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = LOREM_LIST[index];
    UL_DOM.appendChild(liDOM);
  }
}
