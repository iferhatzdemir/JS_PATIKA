var global='bu bir gloabal bir değişkendir';
//var ile tanimlanan degiskenlere blocklardan erisilebilir
function globalCall(){
   console.log(global);
};
globalCall();

function outCall(){
    var out='<br>function scope içerisini dışarıdan çağıramayız';
    console.log(out)
};
outCall();
//out is not defined hatası ile karşılaşırız. bu bir referaceErrordur.
//console.log(out);


//var ile tanımlanan değişkenlerin block scope olmamasından dolayı karşımıza bazı sorunlar çıkabilir.

var WeLove="1.yazi";
 if(2>1){
   var WeLove='2.yazi';
   console.log(WeLove);
 }
 console.log(WeLove);

 let GlobalLet=234;
 if(true){
     let GlobalLet=323;
     //let GlobalLet=43; tekrar aynı blokta tanımlanırsa SyntaxError: Identifier 'GlobalLet' has already been declared hatası ile karşılaşılır.
     console.log('İlk Bloktakş değer: '+GlobalLet);
     if(true){
         let GlobalLet=9;
         console.log('ikinci blockta tanımlanan deger:'+GlobalLet);
     }
 }
 console.log('Globalde Tanımlanan değer: '+GlobalLet);


//Const ile tanımlanan objelerin özellikleri (properties) değiştirilebilir fakat objenin kendisi değiştirilemez. Diziler içinde aynısı geçerlidir. Dizi değerleri değiştirilebilir fakat dizinin kendisi değiştirilemez.
 const user={
      isim:'ahmet'
 }
 user.isim='ibrahim';
 console.log(user.isim);

 const array= [1,2,3,4];
 array[0]=3;
 console.log(array[0]);


 var deli;
 deli=function(){
     console.log('b')
 }
deli();