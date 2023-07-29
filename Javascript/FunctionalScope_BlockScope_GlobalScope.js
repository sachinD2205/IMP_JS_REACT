// ! Global Scope --  we can acess variables from anywhere
// let const and var any variable

let a = 10;
var b = 20;
const c = 30;

console.log("Global Scope", a, b, c);

// fun
const Test = () => {
  console.log("Global Scope", a, b, c);
};

// func
function abc() {
  console.log("Global Scope", a, b, c);
}

Test();
abc();

//todo :  Block Scope  --

// {
//   // let and const are block scope
//   var d = 1;
//   let e = 2;
//   const f = 3;
//   console.log("fsd", d, e, f);
// }

// console.log(
//   "blockScope e and f are block scope that why we cant acess them",
//   d,
// );

//todo : Global Scope ---- we can not acess any where able outof Functions scope

// function xyz() {
//   let x = 10;
//   const y = 20;
//   var z = 30;

//   //   console.log("xyz", x, y, z);
// }

// const bhava = () => {
//   let x = 10;
//   const y = 20;
//   var z = 30;

//   //   console.log("xyz", x, y, z);
// };
xyz();
bhava;
console.log("xyz", z);
