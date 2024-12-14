const name = "hitesh";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
// note always write in backticks when using string

const gameName = new String("raman - deep - sahi");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);

// note we can't give negative value to
// substring as it will always start
// from index 0 even if we give negative value

console.log(newString);

const anotherString = gameName.slice(-8, 4);

console.log(anotherString);

const newStringOne = "      raman     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("raman"));

console.log(gameName.split("-"));
// it gives an array with 3 strings
