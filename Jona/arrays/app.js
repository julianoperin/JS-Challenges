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
