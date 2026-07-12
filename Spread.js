let arr = [1, 2, 3];
console.log(arr);
console.log(...arr);  //output : 1 2 3    عمل => spread


 // عشان احولها تاني ل array

// solution 1
let newArr = [...arr];
console.log(newArr);

// solution 2
let person = { ...arr };
console.log(person);


