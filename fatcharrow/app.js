function hello(firstname){
    console.log(`Merhaba ${firstname}`)
}

hello('Ferhat');

const helloFuncv1= (firstname)=>{console.log(`Hello ${firstname}`)};
helloFuncv1("Ferhat");


const helloFuncv2=firstname=>console.log(`helllo ${firstname}`);//tek işlemlerde fat arrowdan sonra süslü parantezlere ihtiyac yok paramatrelerde ise 1 tane parametre alıyor ise süslü parantezlere ihtiyaç yok 

helloFuncv2('ferhat')

const helloFuncv3=(firstname,lastName)=>console.log(`Hello ${firstname} ${lastName}`);

helloFuncv3('ferhat','özdemir');

const helloFuncv4=(firstname,lastName)=>{
    let info=`${firstname} ${lastName}`;
    console.log(info);
    return info;

};
helloFuncv4('İbrahim Ferhat','ÖZDEMİR');


