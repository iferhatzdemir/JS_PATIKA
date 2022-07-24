const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];
// userName icinde orjinal isim kalsin,
// shortName icinde ilk harf buyuk . (A.)
// newName icinde ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}
const newUsers = USERS.map((item) => item.toLowerCase());
console.log(newUsers);
// const userObj=USERS.map(item=>{
//     return {
//         userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`

//     }
// });
const userObj = USERS.map((item) => ({
  userName: item,
  shortName: `${item[0]}.`,
  newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
}));
console.table(userObj);

// Bir dizinin tüm elemanlarını 2 ile çarpan fonksiyon;

const sayilar = [2, 3, 4, 5, 10];

const newSayilar = sayilar.map((item) => item * 2);
console.log(newSayilar);

// Örnek 2: Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.

const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
const newSalary = maaslar.map((item) =>
  item > 3000 ? item + (item * 15) / 100 : item + (item * 25) / 100
);
console.log(newSalary);
