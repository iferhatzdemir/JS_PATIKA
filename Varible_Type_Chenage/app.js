//veri Türü Öğrenme ve Değiştgirme
let NumberPrice=2343;
let StringPrince="2343";
let BooleanPass=true;
//tür konrolu typeof ile yapmaktayız
console.log("NumberPrice bir ",typeof(NumberPrice),"dir.");
console.log("StringPrice bir ",typeof(StringPrince),"dir.");
console.log("BooleanPass bir",typeof(BooleanPass),"dir.");


//string ifadeleri int veya float veri tipine dönüştürme

let number1="320";
console.log(typeof(number1));
number1=parseInt(number1);
console.log(typeof(number1));

//aşağıda strin ifadeyi number çevirmek istediğimizde bize NaN olarak dönüş sağlamaktadır. 
let stringtoNumber="adka233sad";
stringtoNumber=parseInt(stringtoNumber);
console.log("deneme",typeof(stringtoNumber),stringtoNumber);

//parseFloat

let Stringfloat="22321.3";
console.log(typeof(Stringfloat));
Stringfloat=parseFloat(Stringfloat);
console.log(Stringfloat, typeof(Stringfloat))