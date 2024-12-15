const mySym = Symbol("key1");

const JsUser = {
  name: "Raman",
  age: 18,
  location: "Jaipur",
  "full name": "Raman Sahi",
  [mySym]: "mykey1",
  email: "sahiraman@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// Object.freeze(JsUser);
JsUser.email = "sahiraman@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};
// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
