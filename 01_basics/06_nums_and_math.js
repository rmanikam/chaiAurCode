const score = 400;

console.log(score);

const balance = new Number(100);

// gives value in form of Object

// [Number: 100]
console.log(balance);

// converts the value to string
console.log(balance.toString());

// gives value 3
console.log(balance.toString().length);

// gives value 100.0
console.log(balance.toFixed(2));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;

console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // will give Object of  {}
// console.log(Math.abs(-4)); // will give value 4
// console.log(Math.round(4.6)); // will give value 5 and for 4.3 will give value 4
// console.log(Math.ceil(4.2)); // will give value 5
// console.log(Math.floor(4.9));// will give value 4
// console.log(Math.min(4, 3, 6, 8)); // will give value 3
// console.log(Math.max(4, 3, 6, 8)); // will give value 8

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
