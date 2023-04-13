// ARRAYS
const numbers = [10, 100, 500, 1000];
console.log(numbers);

// returns an array with a key and value pair for each entry in the array
const key_numbers = numbers.entries();

console.log(key_numbers.next());

numbers.forEach((number) => {
  console.log(number * 2);
});

const doubled_numbrs = numbers.map((number) => {
  return number * 2;
});

console.log(doubled_numbrs);

// return true or false if any elem satisfies function
const check_odd_numbrs = numbers.some((number) => {
  return number % 2 === 1;
});

console.log(check_odd_numbrs);

// filter can take up to 3 parameter the value passed frm container
// index and original array as a whole
const testArray = [10, 20, 30];
const newNumbrs = numbers.filter((number, index, thisArray) => {
  console.log("array at:", index, "value: ", thisArray[index]);
  return number > 100;
});

console.log(newNumbrs);

// OBJECTS
const user = {
  name: "Salitos",
  age: 45,
  city: "Istanbul",
};

console.log(user.age);
console.log(user["name"]);

user.age = 46;
console.log("revised age: ", user.age);

// functions defined in an object needs to have function keyword
// ananonymous(arrow) functions cannot be used
// this keyword required to refer to any of objects properties
const obj1 = {
  firstname: "Salitoss",
  hobbies: ["climbing", "movies", "coffee"],
  calculateLength: function () {
    console.log(this.hobbies);
    return this.hobbies.length;
  },
};

console.log(obj1.calculateLength());

const calculatePrice = (sqMeters = 10000) => {
  return 1.5 * sqMeters;
};

console.log(calculatePrice());

// Destructuring
const { name, city } = user;
console.log(name, city);

const [a, b, _, c] = numbers;
console.log(a, b, c);

console.log([...numbers, ...doubled_numbrs]);

// objects, variable, reference are not equal even if the values
// they store are the same since it compares the pointer address
console.log({ name: "Salitos" } === { name: "Salitos" });

// short circuiting with && and ||
const price = 1000;

price > 500 && console.log("price:", price);
price > 5000 && console.log("price:expensive", price);
