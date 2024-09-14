

// closure

// ex-1
// function x(){
//     var a=10;
//     return function y(){
//         console.log(a);
//     }
// }
// var res=x();
// console.log(res);
// res();

// ex-2

// function x(){
//     var a=10;
//     function y(){
//         var b=20;
//         function z(){
//             var c=30;
//             console.log(a,b,c);
//         }
//         z();
//     }
//     y();
// }
// x();




// ex-3


// function x(){
//       for(var i=0;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*3000)
//       }
// }
// x();


// ex-4

// function x(){
//     for(var i=0;i<=5;i++){
//         function close(i){ 
//             setTimeout(()=>{
//                 console.log(i)
//             },i*1000)
//         }
//         close(i);
//     }
// }
// x();



// ex-5

// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// var b=outer();
// b();

// ex-6

// function Counter(){
//     var count=0;
//     this.increament=function(){
//         count++;
//         console.log(count);
//     }
//     this.decreament=function(){
//         count--;
//         console.log(count);
//     }
// }
// var res= new Counter();
// res.increament();
// res.decreament();


// function fun1(){
//     console.log(num);
// }
// fun2(fun1);
// var num=100;
// function fun2(fun){
//     var num=200;
//     fun();
// }

// var a=10;

// console.log(a);

// function fun(){
//     // this.a=20;
//     console.log(this.a);
// }
// this.a=30;
// fun();
// this.a=50;
// console.log(this.a);


var a=10;
const b=20;
let c=30;
console.table({a,b,c});
console.log(this.a,this.b,this.c);