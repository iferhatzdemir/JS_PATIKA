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
