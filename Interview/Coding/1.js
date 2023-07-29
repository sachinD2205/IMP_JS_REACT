//! ============ @Question 1 ==========>

//? give me output

//! Type coercion - in java script refers to the automatic converion of value from one data type to another when performing operations or comparisons

// ex

// let num1 = 10 + "11";
// console.log(num1, typeof num1); //1011 - string
// console.log(num1 + " vikas"); // 1011 vikas

//todo - note ---  + opertor used for addition and concetenation
//todo - - operator used for only for substraction

// ex -
// let num2 = "12" - 10;
// console.log(num2, typeof num2); // 2 number
// console.log("akash" - num2); //NaN --

//! ====================> Question 2 =======>

//? Remove all  null and undefined properties from an object

// const obj = {
//   a: 1,
//   b: null,
//   c: undefined,
// };

//! solution 1
// let obj1 = {};
// for (let p in obj) {
//   if (obj[p] != undefined && obj[p] != null) {
//     obj1[p] = obj[p];
//     // Obj.p not working if acess dynamically then use like this obj[p]
//   }
// }

// console.log(obj1);

//! solution 2
// let obj2;

// obj2 = Object.fromEntries(
//   Object.entries(obj).filter((data) => data[1] != null && data[1] != undefined),
// );

// console.log(obj2);

//! solution 3

// let obj2 = {};

// obj2 = Object.fromEntries(
//   Object.entries(obj).filter(([_, val]) => val != null && val != undefined),
// );

// console.log(obj2);

//! ====================> Question 3 =======>

//todo : Create an Object from the pairs of key and value

// solution 1
// let ArrData = [
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
//   ["d", 4],
// ];

// console.log(Object.fromEntries(ArrData));

// solution 2
// let obj2 = {};

// ArrData.forEach((data) => {
//   obj2[data[0]] = data[1];
// });

// console.log(obj2);

//! note --- Object.fromEntries() it convert array of key value pairt to object and Object.entries() convert object array of key value pair

//! ====================> Question 4 =======>
// todo - find Largest Element of Array

// let arr = [23, 343, 4, 45, 4324, 46, 34, 3];

//! method1
// let largestElementOfArray = arr.slice().sort((a, b) => b - a)[0];
// console.log("sortedArry", largestElementOfArray);

//! metod2 for of loop

// let largestElementOfArray = arr[0];

// for (let element of arr) {
//   if (element < largestElementOfArray) {
//     largestElementOfArray = element;
//   }
// }

// console.log(largestElementOfArray);

// less than <
// greater than >

//! method 3 using useReducer function
// let largestElementOfArray = arr.reduce((currentValue, data) =>
//   currentValue > data ? currentValue : data,
// );

// test
// let largestElementOfArray1 = arr.every(data => data > 5000);
// console.log(largestElementOfArray1)

//? The reduce() method is used to iterate over an array and accumulate the elements of the array into a single value. It applies a provided function (the reducer function) against each element of the array, resulting in a single output value.
//? array.reduce(callback[, initialValue]);
// callback: This is the reducer function that gets executed on each element of the array. It takes four arguments:

// accumulator: The accumulator accumulates the result of the reducer function on each iteration. It is the value returned by the previous iteration or the initialValue if provided (optional).
// currentValue: The current element being processed in the array.
// currentIndex: The index of the current element being processed.
// array: The original array on which reduce() was called.
// initialValue: (Optional) If provided, it is used as the initial value for the accumulator. If not provided, the first element of the array will be used as the initial value, and the iteration starts from the second element.

//! ====================> Question 4 =======>
// todo - additon using reduce method

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(
//   "additon_of_value",
//   arr.reduce((currentResult, data) => data + currentResult, 0),
// );


//!  =======================> Question 6 ===================>


let arr = [34, 5445, 3, 37, 37, 87, 78, 56, 44, 44, 56, 562];

//! method1
// let asendingArr = [...new Set(arr.slice().sort((a, b) => a - b))];
// console.log(asendingArr);

//! method2

