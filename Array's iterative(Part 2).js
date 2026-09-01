// iterative methods
function more_than_enough(item) {
  return item > 40;
}
//(1) filter

let grades = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let filtered_grades = grades.filter(more_than_enough);
console.log(filtered_grades);
console.log("---------------------------------------------------");

//(2) find  => (returns only the first element that satisfies the condition)
//(3) findLast returns the last element that satisfies the condition
//(4) findIndex returns the index of the first element that satisfies the condition
//(5) findLastIndex returns the index of the last element that satisfies the condition
//(6) every returns true if all elements satisfy the condition
//(7) some returns true if at least one element satisfies the condition
let grades2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let found_grades = grades2.find(more_than_enough);
console.log(found_grades);
console.log("---------------------------------------------------");
//(8) map => returns a new array with the results of calling a provided function on every element in the calling array
let grades3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let mapped_grades = grades3.map((item) => item * item);
console.log(mapped_grades);
console.log("---------------------------------------------------");
//(9) flatmap => returns a new array with the results of calling a provided function on every element in the calling array and flattening the result by one level

var colors = [
  "Black Olive",
  "Antique White",
  "Ash Gray",
  "Chili Red",
  "Forest Green",
];

function map_callback(item) {
  return item.split(" ");
}
var ar2 = colors.flatMap(map_callback);
console.log(colors);
console.log(ar2);
