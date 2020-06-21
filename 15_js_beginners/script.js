// strings
let name = "umesh";
console.log(name.length);
console.log(name.toUpperCase());

console.log(name.indexOf("me"));
console.log(name.slice(1, 3));

// conditonals
let score = 70;
if (score > 90) {
  console.log("You got an A");
} else if (score > 80) {
  console.log("You get a B");
} else {
  console.log("You did not get an F");
}

// coin toss
if (Math.random() > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

// arrays
let nums = [23, 45, -1, 10];
let hens = ["ur", "sx", "as"];
console.log(hens);

// object literals
const person = {
  firstName: "umesh",
  age: 38,
};

person["lastName"] = "raj";

// Loops
for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

// let password = "lol";
// let guess = prompt("Enter the password");

// while (guess !== password) {
//   guess = prompt("Enter the password");
// }
// alert("You got it right");

// for of loop
const purchases = [10, 12, 12.12, 1, 90];
let sum = 0;
for (let purch of purchases) {
  sum += purch;
}
console.log(sum);

// Functions
function laugh(loudness = 1, name = "None") {
  const laughter = "Ha".repeat(loudness);
  console.log(`${name} says ${laughter}`);
}

laugh(5, "umesh");

function square(num) {
  return num ** 2;
}
console.log(square(7));

// GAME
const targetNum = Math.floor(Math.random() * 10) + 1;

console.log(`Number is ${targetNum}`);

let guess = parseInt(prompt("Enter a number"));
while (Number.isNaN(guess)) {
  guess = parseInt(prompt("Enter a valid number"));
}

while (guess !== targetNum) {
  if (guess > targetNum) {
    console.log(`${guess} is too high`);
  } else if (guess < targetNum) {
    console.log(`${guess} is too low`);
  }
  guess = parseInt(prompt("Guess again"));
  while (Number.isNaN(guess)) {
    guess = parseInt(prompt("Enter a valid number"));
  }
}

alert("You win");
