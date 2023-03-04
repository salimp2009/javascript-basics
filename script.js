// you can change any variable when define with let
// but you can redefine using let description=....
// but if you use var description then it allows redefinition
// Do not use var; bad practice
let description = "we need a floor";
description = "boooo";

const description2 = "we need a floor";
const squareMeters = 100;
const specialCoating = true;
// arrays
const floorOptions = ["carpet", "tile", "wood"];

// camel case is used for variable name with two words
let myNumber = 5;

const renovationJob = {
  ownerName: "John",
  maximumPrice: 5000,
  category: "bathroom",
  newShower: true,
};

console.log(renovationJob);
console.log(description2);
console.log(
  floorOptions.map((item) => {
    return item;
  })
);

console.log(floorOptions[1]);
// prints test: bathroom
console.log(`test: ${renovationJob.newShower && renovationJob.category}`);

function calculatePrice(base) {
  const price = base + renovationJob.maximumPrice;
  console.log(`calculatePrice: ${price}`);
  return price;
}
let newPrice = calculatePrice(squareMeters);
console.log(`newPrice: ${newPrice}`);

// old style of writing function; BAD Practice
// var allows redifinition of an existing function use const !!
// var calculatePrice2 = function (base) {};

// old way of writing function with const
const calculatePrice2 = function (base) {
  //
  const price = base + renovationJob.maximumPrice;
  return price;
};

console.log(`calculatePrice2: ${calculatePrice2(squareMeters)}`);

const calculatePrice3 = (base) => {
  const price = base + renovationJob.maximumPrice;
  return price;
};

console.log(`calculatePrice3: ${calculatePrice3(squareMeters)}`);

// This is shorter way of arrow (lambda) function but formatter
// puts the parentheses back
const calculatePrice4 = (base) => base + renovationJob.maximumPrice;

console.log(`calculatePrice4: ${calculatePrice4(squareMeters)}`);

// old way concanating text with function
// prefer the tick-mark way ` string ${}`
const result4 = "price4: " + renovationJob.maximumPrice;
console.log(result4);

// tick-mark (template literals) allow multiple line
const result5 = `price5: 
line1
line2
${renovationJob.maximumPrice}`;
console.log(result5);

// ternary operator
renovationJob.maximumPrice > 1000
  ? console.log(renovationJob.maximumPrice)
  : console.log(1000);

if (renovationJob.maximumPrice == 5000) {
  console.log(2000);
} else {
  console.log(renovationJob.maximumPrice);
}

const priceAsString = 5000;

// == is a loose comparision and ignores the type
// if (priceAsString == 5000) {

// === is strict comparision and take account of types
if (priceAsString === 5000) {
  console.log("hello");
} else {
  console.log("bye");
}

// print byes
console.log(`${(priceAsString === 4000 && "hello") || "byes"}`);

// prints hello
console.log(`${(priceAsString === 5000 && "hello") || "byes"}`);

// old way of accessing html elements; prefer querySelector
console.log(`${document.getElementsByClassName("heading").length}`);

// modern way of accessing html elements
const headingElement = document.querySelector(".heading");
console.log(headingElement);

headingElement.textContent = "JS Fundamentals";
headingElement.innerHTML =
  "JS <span class='heading--big'> Fundamentals </span> !";

headingElement.insertAdjacentHTML(
  "beforebegin",
  "Hello <span class='heading--big'> javascript </span> !"
);

// manipulate css; Not recommended a way of setting css
headingElement.style.backgroundColor = "purple";
headingElement.style.fontSize = "15px";

// css manipulating thru classes; Recommended way
headingElement.classList.add("heading--small");

const clickHandler = () => {
  headingElement.style.color = "green";
  console.log("testin click");
};
headingElement.addEventListener("click", clickHandler);
