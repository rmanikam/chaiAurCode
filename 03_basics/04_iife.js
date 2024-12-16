// global scope ke pollution se problem hoti hai kahin baar
// us global scope ke variables or jo be declaration hai
// uske pollution hatane ke liye we use iife

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

// ()()

(() => {
  console.log(`DB CONNECTED TWO`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Raman");
