// Object Destructuring:

let settings = {
  userName: "loremIpsum",
  password: "BadPassword",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "kodluyoruz.org",
};

// obje icindeki bilgilerin tek seferde cikarilmasi
// let userName = settings.userName
// console.log(userName)

// rename && destructuring
let {
  userName: user,
  password: pass,
  isActive,

  ip: serverIP,
  serverName,
} = settings;
console.log(user, pass, isActive, serverIP, serverName);
console.log(user);
console.log(settings);
// obje icindeki bazi bilgilerin cikarilmasi

let {
  userName: userName2,
  password: password2,
  isActive: isActive2,
  ...newSettings
} = settings;
console.log(newSettings);
// eger degisken ismi daha once tanimlanmadiysa:
console.log(userName2, password2, isActive2);
// let {userName, password, isActive, ...newSettings} = settings

// objenin destructuring ile kopyalanmasi
// HATALI!!!
// let settings2 = settings
// settings2.userName = "Degisen Bilgi"
// console.log("settings", settings)
// console.log("settings2", settings2)

// DOGRUSU :)
let newSettings2 = { ...settings };
newSettings2.userName = "newUserName";
console.log(newSettings2, newSettings2);
console.log("settings", settings);

// object kopyalama ile ayni... let settings2 = {...settings}

let scores = [1, 2, 3, 4, 5];
let [score1, score2, score3, ...otherscore] = scores;
console.log(score1, score2, score3, otherscore);

let scores2 = [...scores];
let scorecopy = scores; //böyle olursa eğer scores2 de degistirilirse scores de değişecek
scorecopy.pop();
console.log(scores2, scorecopy, scores);

let person = { name: "Selin", city: "Ankara", favoriteColor: "aqua blue" };
let { name: foo } = person;

console.log(foo);
