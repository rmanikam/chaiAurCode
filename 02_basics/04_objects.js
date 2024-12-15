//singelton Object
// const tinderUser = new Object();

//nonSingelton Object

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstname: "raman",
      lastname: "sahi",
    },
  },
};
// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// console.log(Object.keys(tinderUser)); // get all keys

// console.log(Object.values(tinderUser)); // get all values

// console.log(Object.entries(tinderUser)); // makes all
// key:value pair an array represented by []

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// gives boolean value true or false

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "raman",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);

console.log(instructor);

const navbar = ({ company }) => {};

navbar((company = "raman"));
