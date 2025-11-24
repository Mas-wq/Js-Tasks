/*
// 1- if you want to delete item from middle of array use splice method

let arr = ["apple", "banana", "mango", "grapes", "orange"];
arr.splice(1, 2); // it will delete 2 items from index 1
console.log(arr);

// Output: [ 'apple', 'grapes', 'orange' ]

arr.splice(1, 0, "kiwi", "pear"); // 2- it will add 2 items from index
console.log(arr);

// Output: [ 'apple', 'kiwi', 'pear', 'grapes', 'orange' ] 1 without deleting any item

//-------------------------------------------------------//

arr.splice(3, 0, "banana", "Red"); // 3- it will add 2 items from index 3
console.log(arr);
// Output: [ 'apple', 'kiwi', 'pear', 'banana', 'Red', 'grapes', 'orange' ]

*/

// let arr = ["red", "green", "blue", "white", "black"];
// console.log(arr.join("  -  ")); // it will convert array into string with - separator (Concatenation)
// console.log(arr);

//---------------------------------------------------------/
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [75, 78, 60];
let arr4 = arr1.concat(arr3, arr2); // it will merge 2 or more arrays
console.log(arr4);
//---------------------------------------------------------/

// How to find index of item in array
let colors = ["red", "green", "blue", "white", "black"];
let index = colors.indexOf("blue");

if (index == -1) {
  console.log("item not found");
} else {
  console.log("Item found at index: " + index);
}

// if we have duplicate items in array
let numbers = [10, 20, 30, 40, 20, 50, 20];
let firstIndex = numbers.indexOf(20);
console.log(firstIndex); // it will give first occurrence index of 20

let number = [10, 20, 30, 40, 20, 50, 20];
let lastIndex = number.lastIndexOf(20);
console.log(lastIndex);
// it will give last occurrence index of 20

console.log(number.includes(100));
console.log(number.includes(10));
