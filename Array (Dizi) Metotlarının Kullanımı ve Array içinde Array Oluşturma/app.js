let items = [1, 2, 3, 4, 5];
let maleUser = ["ferhat", "oğuz", "fatih"];
let femaleUser = ["emine", "esra", "aslı"];

//Array içinde arrah
items.unshift(maleUser);

console.log(items);
items.push(femaleUser);
console.log(items[0].length); //Arrayın içerisindeki arayin boyutunu öğrendik
console.log(items[0][0]); //dize içerisindeki dizinin ilk elemanına ulaştık

//Arrayin içerisinden array öğe ayırmada splice() methodu kullanılır

let newArray = items.splice(0, 2);
console.log(newArray);

//arraydeki elemanın indexini bulmak

console.log(items);
console.log("5 kaçıncı indexte", items.indexOf(5)); //eğer yoksa -1 döner

console.log("emine kaçıncı itemsda", items[4].indexOf("emine"));

items.push("selam");
console.log(items);
console.log(items.indexOf("selam"));

//ar ray kopyalamak
let copyItems = items; //kopyasını oluşturmaz içerisinden ikisinde de işlem  yapar

copyItems = items.slice(); //
copyItems.pop();
console.log(copyItems);
console.log(items);

//yeni nesil yaklaşımda  array kopyalama ES&
console.log("----------------------------------");
let newCopyItems = [...items];
newCopyItems.pop();
console.log("newCopyItems:", newCopyItems);
console.log(items);

let allUsers = [...femaleUser, ...maleUser];
console.log("allUsers:", allUsers);

let userNewArray = [
  "Norris",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
];

//array içerisindeki bilgileri arraye dönüştürme

console.log(userNewArray.toString());

//join operatorü birleştirme yapmada kullanılıyor mesala ve ile olarak kulanabilitiz

let joinUser = [...allUsers];

console.log(joinUser.join(" and "));

//arrayde istediğimiz index'e değer eklemek

allUsers.splice(Math.floor(allUsers.length / 2), 0, "joinUser");

console.log(allUsers);

//bir arrayda aradanığımız elemanının oluup olmadığını includes ile kontrol ile  ederiz
console.log("allUsers da Tuğberk varmı", allUsers.includes("Tuğberk"));

//concat ile iki dizi bir değişkkende birleştirme yapabilriiz

let usersNewAll = maleUser.concat(femaleUser);

console.log("concat ile birleştirme", usersNewAll);

//foreach'in dizide kullanımı

const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function (malzeme, malzemeIndeksi) {
  console.log(malzeme, malzemeIndeksi);
});
/*
diziAdi.forEach(function (value, index, array) {
    
    // Çalıştırılacak Kodlar
 
});
value : Bu parametre zorunludur ve dizi elemanlarının değerini tutar. 
index : Bu parametre isteğe bağlıdır ve dizi elemanlarının indeks numarasını tutar.
array : Bu parametre isteğe bağlıdır ve dizinin kendisini tutar.



*/
//.map()
//Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let sayilarin5kati = sayilar.map(function (sayi) {
  return sayi * 5;
});

console.log(sayilarin5kati);

/*
some() array fonksiyonu nedir sorusuna en basit şekilde şöyle cevap verebiliriz: bir array içerisinde belirtilen koşullara uygun bir eleman varsa, sonucumuz true dönecektir. Eğer yoksa da false değeri dönecektir. İşte bu kadar basit.

.some() fonksiyonu; filter() fonksiyonu gibi bize bir array dönmez ya da .find() fonksiyonu gibi bir elemanı dönmez. Sadece dizi içerisinde istenilen özelliklere sahip bir eleman var mı yok mu onun sonucunu döner. Yani sonucu sadece true ya da false olacaktır.










*/
const sonuc1 = sayilar.some(function (sayi) {
  return sayi > 5;
});

console.log(sonuc1);
// Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.

const sonuc2 = sayilar.some(function (sayi) {
  return sayi < 3;
});

console.log(sonuc2);

/*
.every()
every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.
*/

const sonucx1 = sayilar.every(function (sayi) {
  return sayi > 3;
});

console.log(sonucx1);
// Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.

const sonuxc2 = sayilar.every(function (sayi) {
  return sayi > 5;
});

console.log(sonuxc2);

/*

.filter()
filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
Yeni oluşacak diziyi bir değişkende saklıyoruz.
Orijinal dizi bozulmuyor.

*/
const filtrelenmisSayilar = sayilar.filter(function (sayi) {
  return sayi > 3;
});

console.log(filtrelenmisSayilar);
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

console.log(sayilar);
// Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.

/*
.find()
Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
Diğer metotların aksine find metodu elemanın kendisini döner.
Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
Koşulu sağlayan bir eleman bulamazsa undefined döner.

*/

const bulunacakEleman1 = sayilar.find(function (sayi) {
  return sayi === 20;
});
console.log(bulunacakEleman1);
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.

const bulunacakEleman2 = sayilar.find(function (sayi) {
  return sayi > 5;
});
console.log(bulunacakEleman2);
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.

const bulunacakEleman3 = sayilar.find(function (sayi) {
  return sayi < 3;
});
console.log(bulunacakEleman3);
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.

/*

.sort()
Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.
*/

const sayilar1 = [3, 5, 2, 10, 4];

sayilar.sort();
console.log(sayilar1);
// Çıktı olarak [10, 2, 3, 4, 5] alırız.
//(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)

sayilar1.sort(function (a, b) {
  return b - a;
});
console.log(sayilar1);
// Çıktı olarak [10, 5, 4, 3, 2] alırız.

/*
.reduce()
Bu metot dizimizi yalnızca bir değere indirger.
Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.
*/

const sayilar4 = [10, 20, 30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici(akumulator, sayi) {
  return akumulator + sayi;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc3 = sayilar4.reduce(indirgeyici, 0);

console.log(sonuc3);
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.

// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:

const sonuc4 = sayilar4.reduce(indirgeyici, 5);

console.log(sonuc4);
// 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.

//pekiştirme soruları
// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
/*let dizi = [2, 5, 8, 11, 15, 17];
let newDizi = dizi.filter(function (sayi) {
  return sayi > 10;
});

let newdizi = newDizi.map(function (sayi) {
  return sayi * 5;
});

console.log(newdizi);
*/

let dizi = [3, 6, 9, 14, 16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction(dizi) {
  let diziCheck = dizi.some(function (sayi) {
    return sayi > 5;
  });
  if (diziCheck == true) {
    console.log("Beşten büyük bir eleman mevcut");
  } else {
    console.log("Beşten büyük bir eleman mevcut değil");
  }
}

myFunction(dizi);

let dizis = [2, 3, 4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
function arrayCarpim(akumulator, sayi) {
  return akumulator * sayi;
}

console.log(dizis.reduce(arrayCarpim, 1));
