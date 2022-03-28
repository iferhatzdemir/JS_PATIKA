let greeting=document.querySelector("#greeting");
greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info","second-class","third-class");//biden fazla eklemek

greeting.classList.remove("new-info","second-class","third-class");//birden fazla silmek için


console.log(greeting.classList)




