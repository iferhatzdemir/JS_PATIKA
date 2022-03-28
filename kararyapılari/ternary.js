let userName=prompt('Lütfen Kullanıcı Adınızı Giriniz');
let info=document.querySelector('#info');
info.innerHTML=`${userName.length>0?userName:'selamtatlım'}`

//ternary kullanımı
//kosul ? dogruysa: yanlıssa;
let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)


console.log(boolean)

let age = 24;
       let permission = (age >= 18) ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

       console.log(permission);