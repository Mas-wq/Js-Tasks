let arr = [[1, 2, 3, 4], 5, 6, [7, 8, 9], 10, 11, [12, 13, 14, 15]];
let data = "";
function process_array(ar) {
  if (Array.isArray(ar)) {
    ar.forEach((e) => {
      process_array(e); // recursive call
    });
  } else {
    data = data + ", " + ar;
  }
}
process_array(arr);
console.log(data);
// this code represents a recursive function that processes a nested array and concatenates its elements into a string. The function `process_array` checks if the input is an array. If it is, it iterates through each element and calls itself recursively. If the element is not an array, it appends the element to the `data` string, separated by commas. Finally, it logs the concatenated string to the console.
