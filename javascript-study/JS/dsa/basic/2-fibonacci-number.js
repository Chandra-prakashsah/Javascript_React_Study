//Q. Fibonacci number
//F(0) = 0, F(1) = 1
//F(n) = F(n - 1) + F(n - 2), for n > 1.
//fibonacci series-  0,1,1,2,3,5,8,13,21,34,55,89,144,233.....

//input:3 ====>output->>2


//solution-1

// function fib(n) {
//     const arr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2])
//     }
//     return arr[n];
// }

//solution-2
function fib(n){
    return n<=1?n:fib(n-1)+fib(n-2);
}

const res = fib(3);
console.log(res);

