const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c); // 2,3,4

// const [x, y, z] = arr;
// console.log(x, y, z); // 2,3,4

// const [first, second] = restaurant.categories;

// console.log(first, second); // Italian, Pizzeria

// Destructuring OBJECTS:
const { name, mainMenu } = restaurant;
console.log(name, mainMenu); // Classico Italiano (3) ["Pizza", "Pasta", "Risotto"]

const { name: restaurantName, categories: tags } = restaurant;
console.log(restaurantName, tags); // Classico Italiano (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

// set default values:
const { menu = [], starterMenu = [] } = restaurant;

console.log(menu, starterMenu); // [] (4) ["Focaccia", "Bruschetta", "Garlic bread", "Caprese Salad"]

// Nested objects
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);
// Assigning a new value
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

// THE SPREAD OPERATOR:
const arr = [4, 5, 6];
const newArr = [1, 2, ...arr];

console.log(newArr); // [1, 2, 4, 5, 6]
console.log(...newArr); // 1 2 4 5 6

// Copy Array
const copyOfArray = [...newArr]; // [1, 2, 4, 5, 6]
// Merge Two Arrays
const a = [1, 2, 3];
const b = [4, 5, 6];
const newAB = [...a, ...b];
console.log(newAB); // [1, 2, 3, 4, 5, 6]

// Iterables: arrays, strings, maps, sets, NOT objects
const str = "Juliano";
const letters = [...str];
console.log(letters); // ["J", "u", "l", "i", "a", "n", "o"]

// THE SPREAD OPERATOR WORKS WITH OBJECTS AS WELL

// REST OPERATOR
// 1) Destructoring
const books = {
  first: {
    name: "Alquimist",
  },
  second: {
    name: "Lamaria",
  },
  third: {
    name: "lendia",
  },
};

const { first, ...others } = books;
console.log("others", others); // second: {…}, third: {…}

//  || OR Operator
//Setting default values
const isItCold = undefined || "It's not Cold!";
console.log(isItCold); // It's not Cold!

//  && AND Operator
// return the first if it falsy truthy, no need to go to the second one
console.log("Hello" && 20 && null && "Juju"); // null

// Pratical Example
// You can substitute the If statement with the AND operator
const order = "Philly Steak";
if (order) {
  console.log("Order placed with if statement!");
}
order && console.log("Order Placed with &&");

// NULISH Coalescing ??
// let guest = 0;
// let numberOfGuests = guest || 10;
// console.log(numberOfGuests); // returns 10 => BAD

let guest = 0;
let numberOfGuests = guest ?? 10;
console.log(numberOfGuests); // returns 10 => BAD

// OPTIONAL CHAINING (?.)
const users = [
  {
    name: "Juliano",
    phone: 3457891231,
  },
];

console.log(users[0]?.name ?? "User Does Not Exists!"); // Juliano

// const odds = {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   }

//   const {
//     odds: { team1, x: draw, team2 }, // Change the name
//   } = game;

//   const {
//     odds: { team1 = 2, x: draw = 0, team2 = 10 }, //Assign a default value if empty
//   } = game;

// THE FOR OF LOOP
