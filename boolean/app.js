let isActive=false;//0
isActive=true;//1
console.log(isActive);

let UserName;
let isUsername= Boolean(UserName);
Boolean("11") //true
Boolean("0") //True
Boolean("") // false


UserName="ahmet";
console.log("username varmı: ",Boolean( UserName));
Boolean(0) //false
Boolean(-0)//false
Boolean(-0.1)//true
Boolean(0===0)//true
console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));

let a;
console.log(Boolean(a));


const b="0";
console.log("b",Boolean(b));
var x = true; console.log(Boolean(x));
var y = "" || -2 || 'JavaScript'; console.log(Boolean(y));                              
var z = {2:'js'}; console.log(Boolean(z));
