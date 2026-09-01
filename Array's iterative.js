// iterative methods
//(1) filter
function more_than_enough(item) {
  return item > 40;
}
let grades = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let filtered_grades = grades.filter(more_than_enough);
console.log(filtered_grades);

/*

Filter return a shallow copy of the array with all elements that pass the test implemented by the provided function. In this case, it returns a new array containing only the grades that are greater than 40.

*/

// Another Ex:
/* 
-----------------------------------------------------------
Here we prove that the filter method returns a shallow copy of the array, meaning that if we modify an object in the filtered array, it will also affect the original array since they both reference the same object in memory.
----------------------------------------------------------- 
*/

let arr1 = [{ name: "ali" }, { name: "ahmed" }];
let results = arr1.filter((item) => item.name === "ali");
console.log(results, results[0]);
results[0].name = "Mahmoud";
console.log(arr1, arr1[0], arr1[1]);
console.log("=========================================================");

/*
----------------------------------------------------------------------------------------------------------
Deep copy example: structuredClone() copies each object completely,
so modifying app_resultes[0].name won't affect arr2[0].
(Note: filter() alone doesn't do this — it only copies references.)
----------------------------------------------------------------------------------------------------------
*/
let arr2 = [{ name: "Mosa" }, { name: "yousef" }];
let app_resultes = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i].name === "Mosa") {
    app_resultes.push(structuredClone(arr2[i]));
  }
}
app_resultes[0].name = "Mahmoud";
console.log(app_resultes, app_resultes[0]);
console.log(arr2, arr2[0], arr2[1]);
