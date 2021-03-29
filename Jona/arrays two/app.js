// Strings
const plane = "amazonas";
plane[1]; // m
plane.length; // 8
plane.indexOf("z"); // 3
plane.indexOf("zona"); // 3
plane.lastIndexOf("a"); // 6
// Slice
console.log(plane.slice(1)); // mazonas
console.log(plane.slice(1, 5)); // mazo

const checkMiddleSeat = (seat) => {
  const seatLetter = seat[seat.length - 1];
  return seatLetter === "B" || "E"
    ? "It's a middle seat!"
    : "Its not a middle seat!";
};
console.log(checkMiddleSeat("11B")); // It's a middle seat!

const passenger = "JulIaNo";
const newPassenger = passenger.toLowerCase();
const correctedPassenger =
  newPassenger[0].toUpperCase() + newPassenger.slice(1);
console.log(correctedPassenger); // Juliano

// Replace
const priceBR = "R$299,99";
const priceUS = priceBR.replace("R$", "$").replace(",", ".");
console.log(priceUS); // $299.99

// Booleans
const airPlane = "A320neo";
console.log(airPlane.includes("A")); // true
console.log(airPlane.startsWith("A320")); // true
console.log(airPlane.endsWith("eo")); // true

// CAPITALIZE NAME
function capitalizeName(name) {
  const newName = name.split(" ");
  let newArr = [];
  console.log(newName); // ["jessica", "ann", "smith", "davis"]

  for (let el of newName) {
    newArr.push(el[0].toUpperCase() + el.slice(1));
  }
  return newArr.join(" "); //Jessica Ann Smith Davis
}
console.log(capitalizeName("jessica ann smith davis"));

// ANOTHER WAY
function capitalizeName(name) {
  const newName = name.split(" ");
  const newArr = [];
  console.log(newName); // ["jessica", "ann", "smith", "davis"]

  for (let el of newName) {
    newArr.push(el.replace(el[0], el[0].toUpperCase()));
  }
  return newArr.join(" ");
}
console.log(capitalizeName("jessica ann smith davis")); // Jessica Ann Smith Davis

// Converting a number to a string
const x = 15;
let a = String(x);
let b = x.toString();
let c = x + "";

// Mask Credit Card
function maskCreditCard(number) {
  const str = number.toString();
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
}
console.log(maskCreditCard("12345678910")); // *******8910

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const textArea = document.getElementById("text").value;

  console.log("Send it!");
  console.log(textArea);
  toCamelCase(textArea);
});

function toCamelCase(str) {
  const newStr = str.split("\n").toLowerCase();
  const output = "";

  for (let word of newStr) {
    const [first, last] = word.trim().split("_");
    output = first + last.replace(last[0], last[0].toUpperCase());
  }
  return output;
}
