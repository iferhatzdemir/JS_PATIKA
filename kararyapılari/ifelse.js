/*let username=prompt("Kullanıcı Adınızı Giriniz");
console.log(Boolean(username))
if(username!=false){
alert(username+" Hoşgeldiiin");
}else{
    alert(`lütfen kullanıcı adı giriniz`);
}*/

/*
let firstNumber=prompt('İlk sayıyı giriniz');
let secondNumber=prompt('İkinci sayıyı giriniz');
function karsilastir(firstNumber,secondNumber){

    if(firstNumber>secondNumber){
        console.log(`${firstNumber} ${secondNumber}dan büyüktür.`)
     }
     else{
        console.log(`${secondNumber} ${firstNumber}dan büyüktür.`)
     }
}

karsilastir(firstNumber,secondNumber);*/
/*

let vizenot=parseInt(prompt('Vize notunuzu giriniz'));
let finalnot=parseInt(prompt('Fİnal notunuzu giriniz'));

function gectiKaldi(vizenot,finalnot){
 if(vizenot>-1 && vizenot<101 && finalnot>-1 && finalnot<101){
    let ortamalama=(vizenot+finalnot)/2
    if(ortamalama>50){
        console.log(`Ortalamanız ${ortamalama} Tebrikler Dersten Geçtiniz`);
    }else{
        console.log(`Ortalamanız:${ortamalama}  Maalesef Dersten Kaldınız`)
    }
 }else{
     console.log('Lütfen 0-100 aralığında bir not giriniz');
}
 
}
gectiKaldi(vizenot,finalnot);*/


//tahmin oyunu
/*
var randomSayi = Math.floor(Math.random() * 10);

//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır

var tahmin = prompt("1-10'a kadar bir sayı gir ve rastgele sayıyı bulmaya çalış!");

if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Bir daha denee :(, Random sayi: " + randomSayi);
  }
  function vkiHesapla(weight, height) {
      var vki; //Bu kod satırını değiştiriniz
      
      if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
      if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
      if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
      if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
      return alert("Girdiğiniz değerleri kontrol ediniz");
    };
    
    
    
    vkiHesapla(weight,height)
*/