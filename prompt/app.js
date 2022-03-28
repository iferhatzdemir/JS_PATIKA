//promp ile kullanıcıdan veri alma

let fullName=prompt("İsminizi Giriniz");
//alert("Hoşgeldin "+fullName);
let hosgeldin=document.querySelector("#hosgeldin");

hosgeldin.innerHTML=`${hosgeldin.innerHTML} <small style='color:red;'>${fullName}</small>`;

console.log(fullName);