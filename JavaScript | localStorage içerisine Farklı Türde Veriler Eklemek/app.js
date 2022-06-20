let user = { name: "ferhat", age: 23, job: "QA Test Engineer", isActive: true };

localStorage.setItem("username", JSON.stringify(user));
let getinfo = localStorage.getItem("username");
let parseInfo = JSON.parse(getinfo);
console.log(parseInfo.age);
