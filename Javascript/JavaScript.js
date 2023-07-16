//  ! Q1 -

let a = [];
let b = [];

console.log(a == b); // false
console.log(a === b); // false

// it  return false because here not compare value it compare memory location (refrences)

console.log(JSON.stringify(a) == JSON.stringify(b)); // true
console.log(JSON.stringify(a) === JSON.stringify(b)); // true

// in string it checks acutally value


// -------------------------------------------

//  ! Q2
