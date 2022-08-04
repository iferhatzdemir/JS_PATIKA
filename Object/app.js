let arrayObj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let object1 = { obj: 1 };

console.log("arrayObj", typeof arrayObj);
console.log("object1", typeof object1);
let countriesTalkSpanish = {
  continent: "South America",
  language: "Spanish",
};

let uruguay = Object.create(countriesTalkSpanish.continent("South America"));
console.log("uruguay", uruguay);
