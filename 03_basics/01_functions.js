// function definition

function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("M");
  console.log("A");
  console.log("N");
}

// sayMyName(); // function reference

// these are parameters
function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}
// these are arguments

const result = addTwoNumbers(3, 4);

// console.log("Result:", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("raman"));

// console.log(loginUserMessage("raman"));

// this is rest operator
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

// const user = {
//   username: "raman",
//   price: 199,
// };

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
