// better comments
// ! hello
// ? jdk
//  todo   ldfdsf
// *  hello

//  -------------------------------------------

//  ! Q1 -

// let a = [];
// let b = [];

// console.log(a == b); // ? false
// console.log(a === b); // ? false

// todo -  whenver we compare array not it not compare value it compare memeory location (refrences)

// console.log(JSON.stringify(a) == JSON.stringify(b)); // ? true
// console.log(JSON.stringify(a) === JSON.stringify(b)); // ?  true

// todo -  in string it checks acutally value

//  -------------------------------------------

//  ! Q2

// let a = [];
// let b = a;

// console.log(a == b); // ? true
// console.log(a === b); // ?  true

// todo - here we stored a refrence in b variable  it return true beacause it checks the memory locations not value

//  -------------------------------------------

//  ! Q3

let a = [20];
let b = ["20"];

console.log(a[0] == b[0]); // ? true
console.log(a[0] === b[0]); // ? false   number and string compare

// todo - here is compare array element value

//  -------------------------------------------

//  ! Q4
