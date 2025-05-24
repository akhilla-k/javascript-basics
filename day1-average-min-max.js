// without user input
let numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let average = sum / numbers.length;
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

console.log(`The average of the numbers is ${average}`);
console.log(`The minimum value of the numbers is ${minValue}`);
console.log(`The maximum value of the numbers is ${maxValue}`);


// with user input

let arraySize = Number(prompt("Enter how many numbers you want to input:"));
let array = [];
let sum = 0;

for (let i = 0; i < arraySize; i++) {
  let num = Number(prompt(`Enter number ${i + 1}:`));
  array.push(num);
}

for (let i = 0; i < arraySize; i++) {
  sum += array[i];
}

let average = sum / arraySize;
let minValue = Math.min(...array);
let maxValue = Math.max(...array);

console.log(`The average of numbers is ${average}`);
console.log(`The minimum value of the numbers is ${minValue}`);
console.log(`The maximum value of the numbers is ${maxValue}`);
