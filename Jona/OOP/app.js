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

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

console.log("===============");

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function (speed) {
  this.speed += 20;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};

Car.prototype.brake = function (speed) {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};

const BMW = new Car("Alfa", 120);
const Mercedez = new Car("Bravo", 95);

BMW.accelerate();
BMW.brake();
Mercedez.accelerate();
Mercedez.brake();

console.log("===============");

//class expression
// const PersonCl = class {

// }

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to prototype
  calcAge() {
    let currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  }
  sayHi() {
    console.log("Hey Jessica!");
  }

  get age() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
}

const jessica = new PersonCl("Jessica James", 1995);
console.log(jessica);
jessica.calcAge();
jessica.sayHi();
console.log(jessica.age);

// Classes are not hoisted.
// Functions are and we can use them before declaration
