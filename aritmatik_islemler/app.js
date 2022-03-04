/*
//number veri türünü tanımlamak
let price=100;
let tax=0.18;
let priceTax=price*tax;
let totalPrice=price+priceTax;
console.log(totalPrice);
console.log("-----------------------");
//artırma ve azaltma işlemleri 
let counter=320;
counter=counter+1;
console.log(counter);
console.log("-----------------------");
let counterTwo=0;
counter=counter+1; // uzun yontem
counterTwo+=1;//artıma işlemi
console.log(counterTwo);

for(let x=0;x<20;x++){
    counterTwo+=1;
    console.log(counterTwo)
    console.log("|------------------------------------|");
}


console.log("/////////////////")
let sayac=20;

sayac--;
console.log(sayac);

for(let y=0; y<sayac; y++){
    sayac-=1;
    sayac%=2;
    console.log(sayac);
    y*=2;
    

}
let cos=12;
cos/=3;
console.log(cos);

let mod=403;
mod%=2;
console.log(mod);
//işlem önceliği ;



var ciftArray=[];
var tekArray=[];
var mainArray=[23,3242,34,324,2,3,4,4,4,5,2,3,4,24,87];
for(let a=0; a<mainArray.length;a++){
if(mainArray[a]%2==0){
 let doubleEleman= mainArray[a];
 ciftArray.push(doubleEleman);
}else{
    let SingleEleman=mainArray[a];
    tekArray.push(SingleEleman);
}
}

console.log(tekArray);
console.log("----------------")
console.log(ciftArray);

// eğer aynı değerler bulunan değerleri sayıp 1 tane olana kadar arrayden silme işlemi yazılacak
let input=3;
let v=2;
let virt=v ** input;
console.log(virt);

*/


//aşağı yuvarlama
let floor=1.9
console.log(Math.floor(floor));
//yukarı yuvarlama
let ceil=2.5;
console.log(Math.ceil(ceil));

//yakına yuvarlama
console.log(Math.round(1.49));