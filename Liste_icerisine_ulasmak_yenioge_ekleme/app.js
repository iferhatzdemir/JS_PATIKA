// liste içerisindenki son elemana ulasmak veya eleman eklemek

let Firstitem = document.querySelector("ul#list>li:first-child");
Firstitem.innerHTML = "ilk öge";
console.log(Firstitem);

let lastitem = document.querySelector("ul#list>li:last-child");
lastitem.innerHTML = "son öge";
console.log(lastitem);

let ulDom = document.querySelector("ul#list");
let liDom = document.createElement("li");
liDom.innerHTML = "ensona eklemek";
ulDom.append(liDom);

liDom.innerHTML = "ilk başa eklemk";
ulDom.prepend(liDom);
