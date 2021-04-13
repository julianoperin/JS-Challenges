// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
//! SLICE => does not mutate the array
const arr = ["a", "b", "c", "d"];
console.log(arr.slice(1)); // ["b", "c", "d"]
console.log(arr.slice(1, 3)); // ["b", "c"] index 3 will not be included
console.log(arr.slice(-1)); // ["d"]
// You can create an copy of the array with the "spread operator" or "slice method"
//! SPLICE => mutate the array
//! REVERSE
console.log(arr.reverse()); // ["d", "c", "b", "a"]
//! CONCAT
const arr2 = ["e", "f", "g", "h"];
const letters = arr.concat(arr2);
console.log(letters); // ["d", "c", "b", "a", "e", "f", "g", "h"]
console.log([...arr, ...arr2]); // ["d", "c", "b", "a", "e", "f", "g", "h"]
//! JOIN
console.log(letters.join(" | ")); // d | c | b | a | e | f | g | h
//! Math.abs() => Absolute Value
console.log(Math.abs(-50)); // 50
