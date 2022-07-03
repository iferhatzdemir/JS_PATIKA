let items = [1, 2, 3, 4, 5];
let maleUser = ["ferhat", "oğuz", "fatih"];
let femaleUser = ["seda", "esra", "aslı"];

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

console.log("seda kaçıncı itemsda", items[4].indexOf("seda"));

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

let userNewArray = ["Norris"];
