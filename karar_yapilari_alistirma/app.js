let name=prompt('Lütfen adınızı giriniz');

   

let userNameCol = document.querySelector(".user-name");
let clockCol = document.querySelector(".clock");
const time= new Date();
let years= time.getFullYear();
let month =time.getMonth();
let day=time.getDay();
let dayString=time.getDay();
let hours=time.getHours();
let minute=time.getMinutes()
let second = time.getSeconds();

switch(day){
case 1:
    day='Pazartesi';
    break;
case 2:
    day='Salı';
    break;
case 3:
    day='Çarşamba';
    break;
case 4:
    day='Perşembe';
    break;
case 5:
    day='Cuma';
    break;
case 6:
    day='Cumartesi';
    break;
case 7:
    day='Pazar';
    break;

}

let tarih=`${dayString}.${month}.${years}:${hours}:${minute}:${second}`
  function checkTime(i){
        if (i < 10) {i = '0' + i};
        return i;
    };

    hours = checkTime(hours);
    minute = checkTime(minute);
    second = checkTime(second);

    clockCol.innerHTML = `${hours}:${minute}:${second} ${day}`;
    
    let t = setTimeout(startTime,500);



console.log(tarih);