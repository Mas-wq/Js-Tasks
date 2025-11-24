/*

-------------------------------|
Task 1 : Factorial of a number |
-------------------------------|
example :
!5= 5 * 4 * 3 * 2 * 1
!10=10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

inputs = n
processing = n * n-1 * n-2 .... * 1 
output = Factorial


*/

const n = 5;
let factorial = 1;
for (let i = 2; i <= n; i++) {
    // factorial = factorial * i;
    factorial *= i;
}
console.log(factorial);

/* 
steps:

1-  i =2    <=  2*1=2 ----> factorial
2-  i =3    <=  3*2=6 ----> factorial
3-  i =4    <=  4*6=24 ----> factorial
4-  i =5    <=  5*24=120 ----> factorial

*/
