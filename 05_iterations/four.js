const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// note for objects for of loop doesnt work
// we use for in loop for objects

for (const key in myObject) {
  //   console.log(` ${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //   console.log(programming[key]);
}

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// note this wont give any value as map
// is not iterable
for (const [key, value] in map) {
  console.log(key, ":-", value);
}

// note to apply loop to objects we use for in loop
// note to apply loop to ararys we use for of loop
