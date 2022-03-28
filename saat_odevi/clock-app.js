

let isim = prompt("Adınızı Yazın :")
            
let nameInfo = document.querySelector("#myName")

nameInfo.innerHTML = `${isim}`
nameInfo.innerHTML = isim.toUpperCase();

if (isim.length<1){
    alert ("İsminizi boş bıraktınız")
    
}
isim = prompt(" Tekrar Adınızı Yazın :") 
function showTime() {
    let d = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let time = document.querySelector('#myClock')

time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}  ${d.getUTCDate()} / ${d.getMonth()} / ${d.getUTCFullYear()}  ${days[d.getUTCDay() ]}`
setTimeout(showTime, 1000);
}
showTime();