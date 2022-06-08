let baslik = document.querySelector("#baslik");
baslik.addEventListener("click", domClik);

function domClik() {
  console.log("burası tıklandı");
  console.log((this.innerHTML = "Burası Tıklandı")); //this ile kim olduğunu öğrenebiliyoruz öğrendikten sonra inner html ile içerisine ulaşıp içerisindeki yazıyı  değiştirebiliriz
  this.style.color == "black"
    ? (this.style.color = "pink")
    : (this.style.color = "black"); //this ile nesneye ulaştıktan sonra  buraya rendgini dwgistirdik. ve burada şart koyduk siyahsa pembe değilse yeşil yapmasını istedik
}

let baslik2 = document.querySelector("#baslik2");
baslik2.addEventListener("mouseover", domClik); //mouseover ile üzerine gelince tepki almamızı sağladık
//id=select olan nesne çağrılarak color değişkenine atandı
const color = document.querySelector("#select");
//color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
color.addEventListener("change", selectBox);

//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır
function selectBox(event) {
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);
}

// Selectbox içinde "blue" değerini seçtiğimiz takdirde;
// ekran çıktısı: Etkinlik tipi : change, deger : blue

const selectBox1 = document.querySelector("#selectColor1");
const button = document.querySelector("#button");
const form = document.querySelector(".inputText");
const cerceve = document.querySelector(".container");
selectBox1.addEventListener("click", function () {
  console.log("selectBox1");
});
form.addEventListener("click", function () {
  console.log("form");
});
cerceve.addEventListener("click", function () {
  console.log("cerceve");
});

let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("keypress", function (event) {
  output.innerText = event.target.value.split("").join("");
});

let yellowball = document.getElementById("yellow");
let purpleBall = document.getElementById("purple");

yellowball.onclick = function () {
  purpleBall.style.backgroundColor = "yellow";
};
