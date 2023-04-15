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

console.log(window);
