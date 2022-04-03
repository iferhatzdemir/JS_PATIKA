//Fonksiyonlar tek bir amaca hizmet etmeli

function isimAl(){
    let isim=prompt('Lütfen Adınızı giriniz ');
    alert(`Hoşgeldin ${isim}`);
}
isimAl()
 function yasAl(){
     let yas=prompt('lütfen yaşınızıgiriniz');
     yas=parseInt(yas);
     
 }
 yasAl();

 function ehliyetSorgula(yas,isim){
    let info=document.getElementById('infom');
    if(yas>=18&&isim.lenght>1){
        
        info.innerHTML=`${isim} Tebrikler Ehliyet alabilirsiniz`;
    }else if(isim==""){
        info.innerHTML=`İsminizi Girmediniz`;
    }else if(yas<18){
        info.innerHTML=`18 yaşından küçük olduğunuz için yaşınız ehliyet alamazsınız`;
    }
 }
 ehliyetSorgula();
/*
 info.innerHTML='selam'

let firstNumber=prompt('1.sayi');
firstNumber=parseInt(firstNumber);
let secondNumber=prompt('2.sayi');
secondNumber=parseInt(secondNumber);

function totalFunc(firstNumber,secondNumber){
    
    let total=firstNumber+secondNumber;
}
totalFunc();

let infom=document.getElementById('infom');
infom.innerHTML='sada';*/