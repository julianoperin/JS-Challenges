//! Using Constructor
// The dif between a regular function and a constructor function is that we
// call the constructor with the word new

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // let currentYear = new Date().getFullYear();
  // this.calAge = function () {
  //   console.log(`${this.firstName} is ${currentYear - this.birthYear}`);
  // };
};

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const juliano = new Person("Juliano", 1991);
console.log(juliano);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
Person.prototype.sayHi = function () {
  console.log("Hey Guys!");
};
console.log(Person);

juliano.calcAge();
juliano.sayHi();
