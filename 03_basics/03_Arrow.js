const user = {
  username: "raman",
  price: 999,

  welcomeMessage: function () {
    console.log(` ${this.username}, welcome to website`);
    // console.log(this); // this talks about current context
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

// current context here is {}.
// when you are in node environment this
// refers to empty object
// console.log(this);

// function chai(){
//   let username = "raman"
//   console.log(this.username);
//cant use this inside func as
// it gives undefined.

// }

// chai()

// const chai = function () {
//   let username = "raman"
//   console.log(this.username);
//cant use this inside func as
// it gives undefined.
// }

// const chai = () => {
//   let username = "raman";
//   console.log(this);
// gives this value as empty object
// };

// chai()

// used in react { } or ( )
// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({ username: "raman" });

// console.log(addTwo(3, 4));
