fetch("data/settings.json")
  .then((response) => {
    //console.log(response);
    return response.json();
  })
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  })
  .catch((error) => {
    console.error(error);
  });

let userListDOM = document.querySelector("#userList");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    let array = json;
    let arrFilter = array
      .filter((item) => {
        return item.id < 5;
      })
      .forEach((item) => {
        console.log("title:", item.title);
        let liDOM = document.createElement("li");
        liDOM.innerHTML = item.title;
        userListDOM.appendChild(liDOM);
      });
  })
  .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => json.forEach((item) => console.log(item.email)))
  .catch((err) => console.log(err));
