function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
// const result = add(10, 20);
// console.log(result);
console.log(add(10, 20));
console.log(add(10, 39) + add(10, 31));
console.log(add(10, 39) < add(10, 31));
console.log(undefined + undefined); // NaN

function sub(num1, num2) {
  let result = num1 - num2;
  console.log(result); // return undefined (nothing)
}

// if we try to print the result of sub function
console.log(sub(20, 10)); // undefined

// calling sub function
sub(20, 10); // 10

function test() {
  // arguments object
  console.log(arguments);
}

test(10, 20, 30);
// Another example
function addall(num1, num2, num3, num4, num5) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

addall(10, 20, 30, 40, 50);

//Another example

function addall(num1, num2, num3, num4, num5) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
////////////////////////////////////////////////////
// function Expression

const addtion = function (num1, num2) {
  console.log(num1 + num2);
};
addtion(10, 20); // note : function expression are not hoisted.

////////////////////////////////////////////////////

// Arraw Funtion

const subtraction = (num1, num2) => {
  console.log(num1 - num2);
};
subtraction(20, 10); // note : arrow function are not hoisted.
