//while döngüs genellikle sonsuza kadar döndürmede kullanılır
//bir şey olana kadar demize olanak sağlar.
//standard kullanımı
// let counter = 0;
// while (counter < 10) {
//   console.log(counter++);
// }

let userName = "";
while (userName.length == 0) {
  userName = prompt("Lütfen Kullanıcı Adınızı Giriniz:  ");
  console.log(userName);
}
// let userName = "";

// while (!userName) {
//   userName = prompt("Kullanici Adini Giriniz: ");
//   console.log(userName);
// }
