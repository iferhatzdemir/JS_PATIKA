//Sağlıklı bir kullanımı zor
//let h2=document.getElementsByTagName('h2')
//console.log(h2.title.innerHTML);


let title=document.getElementById('title');
title.innerHTML="Değişen Bilgi";
console.log(title.innerHTML)


let link=document.querySelector("ul#list>li>a")
link.innerHTML="Bağlantıya gidin";

let LinkDegisimi=document.querySelector("#baglanti");
link.style.color="purple";
link.classList.add('btn');
console.log(LinkDegisimi.innerHTML)