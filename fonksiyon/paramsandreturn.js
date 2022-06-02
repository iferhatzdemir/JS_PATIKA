//fonksiyonlar birden fazla parametre alabilir veya hiç de parametre kullanmayabilir
 //let firstName="lorem";
let firstName='Ferhat';
 function greetings(firstName="",lastname=""){//default olarak boş gelmesini sağlamakta
     //console.log(`merhaba ${firstName?firstName:""}`);
     return(`selam ${firstName} ${lastname}`)
 }
let newName=greetings('ahmet','Özdemir');
//console.log(newName);
greetings();



//fonksiyonlar dışarı bilgi gönderebilir veya göndermezler
function greetings2(firstName,lastName){
let info=`Merhaba ${firstName} ${lastName}`;
return info;


}
let info =greetings2('leyla','koruma')

//console.log(info);

function domIdWriteInfo(id,info){
    let domObject=document.querySelector(`#${id}`);
return(`${domObject.innerHTML=info}`)
}
 domIdWriteInfo("infom",'Melike Yarın ne yapıyoruz')


//Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekmektedir.













/*

let bodyindex=document.querySelector("#infom");
function queryGenarete(queryNumber){

    for(let i=1;i<queryNumber+1;i++){
        bodyindex.innerHTML=`İnsert into paramList Ahmet where ID=${i};`;
        console.log(`İnsert into paramList Ahmet where ID=${i};`);
    }

}
// Mantıksal hatalar var bu burada kalsın 
let queryCounter=prompt('Kaç tane sorgu oluşturacaksınız');
queryCounter=parseInt(queryCounter);
if(typeof(queryCounter)=='number'){

    queryGenarete(queryCounter);

}else(
    alert('sayfayı yeniyelerek rakam giriniz')
)

*/