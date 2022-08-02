let user1 = {
  firstName: "Bilgin",
  lastName: "Uzman",
  score: [1, 2, 3, 4],
  isActive: true,
  shortName: function () {
    return `${this.firstName[0].toUpperCase()}. ${this.lastName}`;
  },
  goals: function () {
    return Math.floor(Math.random() * 100);
  },
};

console.log("user1 goals: ", user1.goals());
console.log("user1 shortName: ", user1.shortName());

const newFunction = () => {
  return console.log("Yeni fonsksiyon");
};
console.log(newFunction.name);
newFunction();

//JavaScript Object Constructor
function Insan(isim, dogumTarihi) {
  this.isim = isim;
  this.dogumTarihi = dogumTarihi;
}

const ali = new Insan("ali", 1921);
ali.yas = (dogumTarihi) => {
  const currentTime = new Date();
  return currentTime.getFullYear() - dogumTarihi;
};
console.log(ali.yas(1921));

//Prototype Konusu ve Prototype Yöntemi

Insan.prototype.yeniFonksiyon = () => {
  //sınıfa eklenen prototype yardımıyla eklenen fonksiyon
  console.log("Merhaba Kodluyoruz");
};
const ayse = new Insan("ayşe", 2021);
ayse.yeniFonksiyon();

ayse.__proto__.enYeniFonksiyon = () => {
  //objeye prototype yardımıyla eklenen fonksiyonlarının çalışmasını sağlar
  console.log("Tekrar Merhaba Kodluyoruz!");
};
ayse.enYeniFonksiyon();
// Output : "Tekrar Merhaba Kodluyoruz!"
