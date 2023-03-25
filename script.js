function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str.charAt(i);
  }

  return result;
}

console.log(reverseString("hello"));
console.log(reverseString("ruth"));
console.log(reverseString("joy"));
console.log(reverseString("tolentino"));

// join
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" - ");

console.log(fruits);

// pop
const prutas = ["Banana", "Orange", "Apple", "Mango"];
prutas.pop();

console.log(prutas);
// push
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.push("Kiwi");

// shift
const favoriteFruits = ["Banana", "Orange", "Apple", "Mango"];
favoriteFruits.shift();

// unshift
const favoritePrutas = ["Banana", "Orange", "Apple", "Mango"];
favoritePrutas.unshift("Lemon");

// accessing an element in an array
const myFruits = ["Banana", "Ornge", "Apple", "Mango"];
myFruits[1] = "Orange";

// length
const yourFruits = ["Banana", "Orange", "Apple", "Mango"];
yourFruits.length;

// concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

// flat
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();

// splice
const herFruits = ["Banana", "Orange", "Apple", "Mango"];
herFruits.splice(2, 1);

// slice
const hisFruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = hisFruits.slice(1);

// for (let i = 0; i <= cats.length - 1; i++) {
//   console.log(cats[i]);
// }

// for of loop
// for (const cat of cats) {
//   console.log(cat);
// }

// forEach
// cats.forEach((cat) => {
//   console.log(cat);
// });

// map
// const catsToUpperCase = cats.map((cat) => cat.toUpperCase());

// filter
// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const filtered = cats.filter((cat) => cat.startsWith("L"));