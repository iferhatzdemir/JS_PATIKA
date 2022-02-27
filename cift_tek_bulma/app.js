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