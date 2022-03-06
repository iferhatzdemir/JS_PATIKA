//string birleştirme

let userName="iferhatzdemir";
const hostName="iferhatzdemir.com";

let email=userName+"@"+hostName;

console.log("Merhaba",userName,"Sitemize Hoşgeldin","Mail Adresin : ",email);
//document.write("Merhaba ",userName," Sitemize Hoşgeldin<br> "," Mail Adresin : ",email)

let info=`Merhaba ${userName} sitemize hoşgeldin..
 Mail Adresin: ${email} 
 mail adresinin uzunluğu :${email.length} karakterden oluşmaktadır.
 Borcunuz: ${(3+32)*5} TLdir
 Günün Saat bilgisi: ${new Date().getHours()}
 
 
 
 `; //eğer string ifadenin için değişken değeri için ${degisken_adi} kullanmanız gerekmektedir.
console.log(info);