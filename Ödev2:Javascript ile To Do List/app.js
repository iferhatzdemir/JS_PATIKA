// HTML SAYFASINDAKİ ELEMENTLERİN SEÇİLMESİ

let btnDOM = document.querySelector("#liveToastBtn"); // liveToastBtn id'si ile ekle yazan butona seçtik ve bu butonu btnDOM değişkenine atadık.
let ClearbtnDOM = document.querySelector("#clearList"); // liveToastBtn id'si ile ekle yazan butona seçtik ve bu butonu btnDOM değişkenine atadık.
let listDOM = document.querySelector("#list"); // list id'si ile ul'nin ID'si olan list'i seçtik ve listDOM'a atadık.
let taskDOM = document.querySelector("#task"); //input'un ID'si olan task'ı seçip taskDOM'a atadık.
let checkDOM = document.querySelector("#listCheckBtn");
let ullength = document.getElementsByTagName("li");
//burda var olan bütün li elementlerini alıp ullength'e atadık böylece elimizde kaç madde yani li olduğunu öğrendik.
let checkClear = document.querySelector("#CheckClearBtn");
let taskArray = [];
// MEVCUT LİSTEYİ SİLMEK İÇİN ÇARPI BUTONUNUN OLUŞTURULMASI

// Butonlara dinleyici tanımlanması
checkDOM.addEventListener("click", listCheck);
checkClear.addEventListener("click", CheckClear);
btnDOM.addEventListener("click", taskAdd); // addEventListener ile "click" dediğimiz için butona tıklandığında  taskAdd fonksiyonu çalışacak.
ClearbtnDOM.addEventListener("click", clearList); // addEventListener ile "click" dediğimiz için butona tıklandığında taskClear fonksiyonu çalıltırmasını sağlar
//Fonksiyonlarf
function CheckClear() {
  if (ullength.length > 0) {
    for (var i = 0; i < ullength.length; i++) {
      if (!ullength[i].classList.contains("checked")) {
        ullength[i].classList.add("checked");
      }
    }
  } else {
    alert("Liste boş");
  }
}
function listCheck() {
  if (ullength.length > 0) {
    for (var i = 0; i < ullength.length; i++) {
      if (ullength[i].classList.contains("checked")) {
        ullength[i].classList.remove("checked");
      }
    }
  } else {
    alert("Liste boş");
  }
}

function clearList() {
  if (ullength.length > 0) {
    for (var i = 0; i < ullength.length + 1; i++) {
      ullength[0].remove();
    }
    localStorage.clear();
  } else {
    alert("Liste boş");
  }
}

function check() {
  this.classList.toggle("checked"); // toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
}

function removeButton() {
  this.parentElement.remove(); // burda maddeyi silmek için yanı çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık.
  let removeli = this.parentElement.id;
  let localStorageArray = JSON.parse(localStorage.getItem("taskArray"));
  let index = localStorageArray.indexOf(removeli);
  localStorageArray.pop(index);
  localStorage.setItem("taskArray", JSON.stringify(localStorageArray));
}

//ELEMAN EKLEMEK İÇİN GEREKENLER
function taskAdd() {
  if (taskDOM.value.length === 0 || !taskDOM.value.trim()) {
    // input değeri boş girildiğinde ve girilmediğinde
    $(".error").toast("show"); //error clasını kullanarak
  } else {
    $(".success").toast("show");

    liMaker(task.value.trim()); // input değeri boş değilse liMaker fonksiyonunu çalıştır.
    // Burda ise inputID.değer diyerek inputa girilen değerlerin liDOM'a atanması gerektiğini belirttik.
    taskArray.push(task.value.trim()); // taskArray'e task.value.trim() değerini ekledik.
    localStorage.setItem("taskArray", JSON.stringify(taskArray)); // localStorage'a taskArray'i json formatında ekledik.
    taskDOM.value = "";

    //SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN AYNI İŞLEMLERİN TEKRARI
  }
}

let itemsArray = localStorage.getItem("taskArray")
  ? JSON.parse(localStorage.getItem("taskArray"))
  : [];
console.log(itemsArray);

const liMaker = (text) => {
  const liDOM = document.createElement("li");
  liDOM.id = text;
  liDOM.textContent = text;
  let closeButton = document.createElement("span");

  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeButton;
  liDOM.append(closeButton);
  listDOM.appendChild(liDOM);
  liDOM.onclick = check;
};
itemsArray.forEach((item) => {
  liMaker(item);
});
