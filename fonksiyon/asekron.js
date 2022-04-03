/*function printScreen1(){
    console.log('Selamlar Bu birinci ekran çıktısı');

}

function printScreen2(){
    setTimeout(function(){console.log('ikinci ekran')},10000);
}

function printScreen3(){
    console.log('Selamlar Bu üçünücü ekran çıktısı');

}


printScreen1();
printScreen2();
printScreen3();*/

 /*
//calback
function printScreen1() {
    console.log("İlk ekran çıktısı");
  }

  function printScreen2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("İkinci ekran çıktısı")
      callback2();
    }, 3000);
  }

  function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
  }


 printScreen2(printScreen1, printScreen3);

//Function Declaration
function notification(name){
     alert(`Hoşgeldin ${name}`)
 }
notification('ahmet');*/


// arrow function 

function Question(hobby) {
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type) {
          console.log(name + " are you interested in " + type + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Cemre","nodejs");