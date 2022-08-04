let laptop1 = {
  brand: "Apple",
  model: "Macbook Air", //key sayı özel karakter ile başlayamaz
  weight: 1.2,
  //model name olmaz key yapısı boşluk kulanılarak kullanılamaz
  //model-nameolarak kullanlmaz
  //model_name kullanılır ama genellikle camelCase kullanılır
  "2kg": 2,
};
console.log("laptop1", laptop1);
console.log("laptop1.brand:", laptop1.brand);
//diğer çağırma metholarından bir taneside aşağıdaki gibidir
console.log("laptop1['brand']:", laptop1["brand"]);
console.log("laptop1['model']:", laptop1["model"]);
console.log("laptop1['2kg']:", laptop1["2kg"]);
//console.log("laptop1[2kg]:", laptop1[2kg]); hata verir
//console.log(laptop1.2kg); hata verir

laptop1.brand = "Dell";
laptop1["brand"] = "acer";
console.log("laptop1", laptop1.brand);
// yeni bir bilgi ekleme
laptop1.operatingSystem = "Windows";
console.log("laptop1", laptop1);

//OBJECT teki keyleri ulaşmak için için
console.log(Object.keys(laptop1));

for (let key in laptop1) {
  console.log(key);
}
console.log("-----------------------------------------------------");
keysArray = Object.keys(laptop1);
keysArray.forEach((keys) => {
  console.log("keys", keys);
  console.log(laptop1[keys]);
});
//değerlere ulaşmak için Object.Values() kullanırı
console.log("-----------------------------------------------------");
console.log(Object.values(laptop1));
