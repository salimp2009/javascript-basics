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

let number = [99, 5, 8, 16];
console.log([1, 2, 3, ...number]);
console.log([...number, 1, 2, 3, ...number]);
console.log(typeof number.join());
console.log(typeof number);
console.log(number.join("-"));
console.log(number.includes(16));
console.log([[number], [number]].flat(2));
console.log(
  number.map((item, index) => {
    return item * index;
  })
);
console.log(number);

number.forEach((item) => console.log(item * 3));
console.log(number);