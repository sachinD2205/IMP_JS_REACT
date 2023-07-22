//todo -  slice method
// slice method is two paraments start and end both are optional if dont given any it will copy entrie
//  start -- position where form copying array
// end -- position where stop copying array
//! note - slice method create copy of existing array it doesnot modifiy original array

let happyCodingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("entireArrayCopy", happyCodingArray.slice());
// console.log("print 4 to 8 using slice", happyCodingArray.slice(3, 8));

// =====================================>

//todo - sort method

//! it modify original array
//! we direct sort string methods
//! we cannot directly sort numbers

//  array.sort()     //? it work directly sort for string array
//  array.reverse()  //? it is used to revese string array
//! below we used callbackFucntion which compare and return
// ! not work direct sort method on number because The default sorting order is based on converting the elements to strings and comparing their Unicode code points.
//  array.sort((a,b) => a-b)   //? normal sort for number
//  array.sort ((a,b)=> b-a )  //? reverse sort for number

// =====================================>

//todo - resverse

//! it is used to reveser string array

let studentNameArray = ["sachin", "ajit", "sarthak", "swapni", "vijay"];

// console.log("normal_Sort", studentNameArray.sort());
// console.log("reverse_Sort", studentNameArray.reverse());

//todo - object compare -Sorting an array of objects based on a specific property:

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

people.sort((a, b) => a.age - b.age);

// console.log(people);

// =====================================>

//todo - EveryMethod every()

//! is  igher-order array method that tests whether all elements in an array pass a given condition. It returns a boolean value indicating whether every element in the array satisfies the provided testing function.

// ! The every() method is useful when you want to validate whether all elements in an array satisfy a specific condition. It's a concise way to check if every element meets a certain criterion without manually iterating over the arra

// ex - allnumber are divisilbe by 5 or not

let abc = [55, 20, 5, 7];
let acb = [5, 30, 55, 65, 70];

// console.log(
//   "acb",
//   acb.every((elemet) => elemet % 5 == 0),
// );

// console.log(
//   "abc",
//   abc.every((elemet) => elemet % 5 == 0),
// );

// =====================================>

//todo - split() method




