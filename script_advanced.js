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

const check_odd_numbrs = numbers.some((number) => {
  return number % 2 === 1;
});

console.log(check_odd_numbrs);
