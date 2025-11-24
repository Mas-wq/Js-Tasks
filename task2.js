/*

--------------------------------- |
Task 2 : Prime number from 1 to n |
--------------------------------- |

input : n
هو عدد يقبل القسمه علي نفسه وعلي الواحد فقط =  <==prime number==>


*/

const n = 30;

for (let i = 2; i <= n; i++) {

    let isPrime = true;

    for (let j = 2; j < i; j++) {

        if (i % j == 0)
            isPrime = false;
        break;

    }

    if (isPrime == true) {  // if(isPrime) 
        console.log(i);
    }
}

