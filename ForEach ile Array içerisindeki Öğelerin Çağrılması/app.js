const PRODUCTS = [
  "Laptop",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

// PRODUCTS.forEach((product, index, array) => console.log(PRODUCTS));

PRODUCTS.forEach(
  (product, index, array) => (array[index] = `${product.toUpperCase()}`)
); // toUpperCase

console.log(PRODUCTS);

const userListDOM = document.querySelector("#userList");

PRODUCTS.forEach((product, index, array) => {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = product;
  console.log(product[index]);
  userListDOM.appendChild(liDOM);
});
//forEach genellikle array içerisinde kullanırılır
