const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros);

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);

// console.log(allHeros);

// how to remember spread operator

// take a glass and throw it down and it
// will spread everywhere.

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Raman"));

// from method converts it into array
console.log(Array.from("Hitesh"));

//cant do this way. cant convert
// it into array as it is an object.
// it will give empty array.

console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
// returns an array from set of elements
console.log(Array.of(score1, score2, score3));
