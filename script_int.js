const text = "Hello intermediate JS    ";

console.log(text, text.length);
console.log(text.includes("Hello"));
console.log(text.toUpperCase());
console.log(text);
console.log(text.trim().length);
console.log(text.substring(0, 1));

const total = 1543.95345;
console.log("total:", total);
console.log("total:", total.toFixed(3));
console.log("total:", total.toPrecision(2));
console.log("total:", total.toLocaleString("en-US"));

const text2 = "Map of NYC";

if (text2.includes("NYC")) {
  console.log(100);
} else {
  console.log(50);
}

const response = {
  statusCode: 500,
  ok: true,
  data: [1, 2, 3],
};

if (!response.ok) {
  console.log(response.statusCode);
} else {
  console.log(response.data);
}

let numbers = [99, 5, 8, 16];
console.log([1, 2, 3, ...numbers]);
console.log([...numbers, 1, 2, 3, ...numbers]);
console.log(typeof numbers.join());
console.log(typeof numbers);
console.log(numbers.join("-"));
console.log(numbers.includes(16));
console.log([[numbers], [numbers]].flat(2));
console.log(
  numbers.map((item, index) => {
    return item * index;
  })
);
console.log(numbers);

numbers.forEach((item) => console.log(item * 3));
console.log(numbers);

// nested objects
const user = {
  name: "Doritos",
  hobbies: ["programming", "coffee"],
  address: {
    city: "LA",
    state: "CA",
  },
};

console.log(user);
console.log(user.name);
console.log(user.hobbies);
console.log("city:", user.address.city);

// objects in array
const peopleData = [
  {
    name: "Didos",
    age: "50",
  },
  {
    name: "Salitos",
    age: "51",
  },
  {
    name: "Semos",
    age: "66",
  },
];

console.log(peopleData);

peopleData.map((person) => {
  console.log(person.name, ":", person.age);
  console.log(person);
});

const logGreeting = (name) => {
  console.log("Hello", name);
};

const logUser = (user) => {
  console.log("username:", user.name);
  console.log("first hobby: ", user.hobbies[0]);
  logGreeting(user.name);
};

logUser(user);

let number = 100;
number = number + 1;
number++;
console.log(++number);
console.log(--number);

const checkValidity = (person) => {
  if (person === "didem") {
    console.log(person);
    return;
  }

  console.log("semos");
};

checkValidity("didem");

number = 10;
number = 20;
console.log(number, typeof number);

// hoisting; calling function before definition
logMisc();
function logMisc() {
  console.log("misc");
}

setTimeout(() => {
  console.log("this is followed by: ");
  console.log("this is second! ");
}, 1000);

// setInterval(() => {
//   console.log("this is followed by: ");
//   console.log("this is second! ");
// }, 1000);
