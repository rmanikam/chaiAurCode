// Stack and Heap memory in javascript

//datatypes are based on memory allocation

// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

// Primitive Types:

// 1. Stored in stack.

// 2. Passed or assigned by value (call by value).

// 3. Changes to copies don't affect the original.

// Reference Types:

// 1. Stored in heap; accessed via references (stored in stack).

// 2. Changing the value through another reference affects the original.

let myYoutubename = "raman.sahidotcom";

let anotherName = myYoutubename;

console.log(myYoutubename);
raman.sahidotcom;
// console.log(anothername); here
// value of myYoutubename is
// not given but its copy is given

anothername = "chaiaurcode";

// here i am changing the value of anothername
// so now new value will be inside
// anothername

console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
// here reference of userOne is given
// and not its value

userTwo.email = "raman@google.com";
console.log(userOne.email);
console.log(userTwo.email);
