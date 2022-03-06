let email="iferhatzdemir@gmail.com";
let name="İbrahim Ferhat ";
let Lastname="ÖZDEMİR";

//string verisinin uzunluğunu bulmak işin length yöntemini kullanırız length arraylerde de kullanrız.
console.log(email.length);

//ilk karakterini bulmak için değinken_adi[] şeklinde olmali [index verisi] şeklinde de yazmazlıyız
console.log(Lastname[0]);
console.log(Lastname.charAt(0));// degiskenadi.charAt(index) ile de bize değişkenimizin ilk karakterini elde etmemizi sağlar


//stringlerimizi büyük harften küçük harfe  veya küçük harften büyük harfe çevirme işlemi
//büyük harfe çevirmek istersek toupperCase() methodunu kullanırız

let kuculHarf="selam ben kucuk harflerden olusmus bir stringim";
console.log(kuculHarf.toUpperCase());

//küçük harfle yazdırmak istersek bu seferde toLowerCase() methodunu kullanmamız gerekmekte
let BuyukHarf="SELAM BEN DE ARTIK KÜÇÜK HARF OLACAĞIMMMM";
console.log(BuyukHarf.toLowerCase());

//stirng içinde bir veri aratmak istediğimizde search() methodunu bulmak istiyoruz.
//burada yukarıda tanımladığımız emailin içerisinde @ sembolünü aratalım 
//search methodu bize kaçıncı indexde olduğunu döndü.
//arattığınız şeyi bulamadığında bize -1 dönmektedir.


console.log(email.search('@'));


//search fonksiyonu gibi indexof()da kullanılabilir
console.log(email.indexOf('.'));
//stringimizin belli bir noktasını almak istediğimizde slice() methodunu kullanacağız
//email de domain bilgisi almayı gördük
let domainbilgisi=email.slice(email.search('@')+1,email.length);
console.log(domainbilgisi);

//replace methodu ile string içerisinde bilgideğiştrebiliriz. 

email=email.replace(domainbilgisi,"i2i-systems.com");
console.log(email);

//search de yerini sorgularken includes ile var ve ya yok şeklinde cevap alabiliriz

console.log(email.includes('i2i-systems'));
console.log(email.includes('ğ'));


//istediğimiz bilgi ile başlayıp, istediğimiz bilgi ile bitip bitmediğini 

console.log(email.endsWith('i2i-systems.com'));
console.log(email.startsWith('iferhat'));