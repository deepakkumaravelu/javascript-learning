// //task1
// function recursion(num1){
//     if(num1==0){
//     return 1;
//     }
//     return num1*recursion(num1-1);
// }
// let num=prompt("enter the number");
// let fact=recursion(Number(num));
// document.querySelector("h1").innerHTML=fact;

// //task2
// function fibo(n){
//     if(n==1){
//         return 0;
//     }else if(n==2){
//         return 1;
//     }else{
//     return fibo(n-1)+fibo(n-2);
//     }
// }
// let n=prompt("enter number to find the nth fibo");
// let fib=fibo(Number(n));
// document.querySelector("h1").innerHTML=fib;
// //task3
// function noOfWays(n){
//     if(n==0){
//         return 1;
//     }else if(n<0){
//         return 0;
//     }else{
//         return noOfWays(n-3)+noOfWays(n-2)+noOfWays(n-1);
//     }
// }
// let n=prompt("enter number steps:");
// document.write(noOfWays(n));
// //task4
// const arr = [[1,2],[3,[4,[5]]]];
// const flattened = arr.flat(Infinity);
// console.log(flattened);
// task5
// function towerOfHanoi(n, from_rod,  to_rod,  aux_rod){
//         if (n == 0)
//         {
//             return;
//         }
//         towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
//         document.write("Move disk " + n + " from rod " + from_rod +
//         " to rod " + to_rod+"<br/>");
//         towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
//     }
//     var N = 3;
//     towerOfHanoi(N, 'A', 'C', 'B');