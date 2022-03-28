let userName=prompt('Lütfen Kullanıcı Adınızı Giriniz');
let userAge=prompt('Lütfen Yaşınızı Giriniz');

if(userName!=null && userAge>= 18){
alert(`${userName}Tebrikler Ehliyet Alabilirsiniz`);
}else if(!userAge){
    alert(`${userName} Lütfen yaşınızı giriniz ${userAge} `);
}else if(!userName){
    alert(`Lütfen kullanıcı adı giriniz`);
}
