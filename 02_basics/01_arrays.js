const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()// shift removes element from starting

// console.log(myArr.includes(9)); // true
//gives index
// console.log(myArr.indexOf(3));

// .join adds all elements of array into string

// const newArr = myArr.join()

//
// console.log(myArr); // gives array
// console.log( newArr); // gives array too
// but typeof newArr is string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

// myn1 will give value [1, 2]
console.log(myn1);
console.log("B ", myArr);

// myn2 will give last element too
// of 3 too [1,2,3]
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

// diff between slice and splice is
// that splice manipulates original
// array whereas slice doesnot.
