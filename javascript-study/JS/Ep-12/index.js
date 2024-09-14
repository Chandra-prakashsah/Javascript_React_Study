// ex-1
// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     return inner
// }

// const x=outer();
// x();

// ex-2

// function outer(){
//     function inner(){
//         console.log(a);
//     }
//     // let a=10;
//     const a=10
//     return inner
// }

// const x=outer();
// x();

// ex-3
// function outer(b){
//     function inner(){
//         console.log(a,b);
//     }
//     // let a=10;
//     const a=10
//     return inner
// }

// const x=outer("hello world");
// x();

// ex-4

// function outest(){
//     function outer(b){
//         function inner(){
//             console.log(a,b);
//         }
//         return inner;
//     }
//     var a=10;
//     return outer;
// }

// outest()("hello world")();


//ex-5

// function outest(){
//     function outer(b){
//         function inner(){
//             console.log(a,b);
//         }
//         return inner;
//     }
//     // let a=10;
//     return outer;
// }
// let a=100;
// outest()("hello world")();


//ex-6

// function counter(){
//     var count=0;
//     return innerCounter=function(){
//          count++;
//          console.log(count);
//     }
// }

// const x=counter();
// x();
// x();

// const y=counter();
// y();
// y();
// y();


//ex-7

// function Counter(){
//     var count=0;
//     this.increment=function(){
//         count++;
//         console.log(count);
//     }
//     this.decrement=function(){
//         count--;
//         console.log(count);
//     }
// }

// const x=new Counter();
// x.increment();
// x.decrement();
// x.increment();

//ex-8

function a(){
    var b=10, c=20;
    return function(){
        console.log(b);
    }
}
var x=a();
x();