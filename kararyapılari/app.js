let price ="100";
//eşitse

console.log(price==1);
console.log(price==100);//değeri eşit olduğu için true döner


//hem veri tipi hem verinin valuesu eşitmi anlamına gelen ===

console.log(price==="100"); //hem değeri hem türü aynı 

//eşit değilse için !=
console.log(price!=1);

//< küçükse

console.log(price<1);


//<= küçük eşit iser

console.log(price<=100);


//Büyükse >

console.log(price>1);


//Büyük eşitse >=

console.log(price>=100);

//&& ve anlamında kullanılır

console.log("&&= ",price==100 && price!=null);

// veya || or
console.log("||= ",price==10 || price!=null);


//! değil tersi

console.log("!= ",price==10 || !price=="null");
