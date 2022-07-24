const products = [
  "Mikrofon",
  "Kablo",
  "Telefon",
  "Bilgisayar",
  "Mouse",
  "Klavye",
  "Ekran",
];
const newProducts = products.filter((item) => item.length > 5);
console.log(newProducts);
const users = [
  { fullName: "Mehmet Veli", isActive: false },
  { fullName: "Ali Duran", isActive: true },
  { fullName: "Ahmet Yılmaz", isActive: true },
  { fullName: "Oğuz Şahin", isActive: false },
];

// const ACTIVE_USERS = users.filter((item) => item.isActive == true);
const ACTIVE_USERS = users.filter((item) => item.isActive); //true da çalışan bir yapıdır eğer false değeri için burayı isActive===false olarak yazmalıyız.
console.table(ACTIVE_USERS);

const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];
// Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.

const personYearsbig30 = person.filter((item) => item.age > 30);
console.table(personYearsbig30);

// Soru  2:Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.

const jsknowperson = person.filter((item) =>
  item.languages.includes("JavaScript")
);
console.table(jsknowperson);
