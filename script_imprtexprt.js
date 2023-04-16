import { convertCurrency } from "./utilities/functions.js";

console.log("price in TL:", convertCurrency(500));

const someText = "some text :)";

for (const char of someText) {
  console.log(char);
}

const browser = "Brave";

switch (browser) {
  case "Chrome":
    console.log("using Chrome!");
    break;
  case "Brave":
    console.log("using Brave!");
    break;
  case "Firefox":
    console.log("using Firefox!");
    break;
  default:
    console.log("Unknown browser!");
}

// window is a global object; has functions & elements like
// alert, fetcth, document, ..
console.log(window);

// Builtin Math functions
console.log(Math.ceil(5.9));
console.log(Math.floor(5.9));

const randNumbr = Math.random() * 100;

console.log("random Number:", randNumbr);

// Date object
const date = new Date(2053, 2, 27);
date.setFullYear(2023);
console.log(date, `${new Date()}`);

const apartment1 = {
  sqMeters: 50,
  numbrOfBedrooms: 3,
  isBig: function () {
    return this.sqMeters > 100 ? true : false;
  },
};

console.log(apartment1.isBig());

const createApartment = (sqmeters, numberofbedrooms) => {
  return {
    sqMeters: sqmeters,
    numbrOfBedrooms: numberofbedrooms,
    isBig: function () {
      return this.sqMeters > 100 ? true : false;
    },
  };
};

console.log(createApartment(100, 4));

class Apartment {
  constructor(sqMeters, numbrOfBedrooms) {
    this.sqMeters = sqMeters;
    this.numbrOfBedrooms = numbrOfBedrooms;
  }
}

const apartment2 = new Apartment(50, 4);
console.log(apartment2);
