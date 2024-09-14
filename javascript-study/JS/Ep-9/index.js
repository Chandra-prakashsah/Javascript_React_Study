// ex-1

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a,b,c);
// }
// console.log(a);
// console.log(b);
// console.log(c);



// // ex-2

// var a=100;

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a,b,c);
// }
// console.log(a);
// console.log(b);
// console.log(c);


// // ex-3
// let b=100;

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a,b,c);
// }
// console.log(a);
// console.log(b);
// console.log(c);


// ex-4
// const c=100;

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a,b,c);
// }
// console.log(c);


// ex-5

// const c=100;

// function x(){
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(c);
// }
// x();
// console.log(c);


// illegal shadowing

// let a=100;

// {
//     var a=10;
// }


// legal shadowing

// var a=100;

// {
//     let a=10;
// }


// ex-6

// let a=100;
// {
//     let a=10;
//     {
//         let a=20;
//         console.log(a);
//     }
// }


// ex-7

// const a=100;
// {
//     const a=10;
//     {
//         const a=20;
//         // console.log(a);
//     }
//     console.log(a);
// }


// ex-8



// var a=100;
// {
//     var a=10;
//     {
//         var a=20;
//         // console.log(a);
//     }
//     // console.log(a);
// }
// console.log(a);



// ex-9



// const a=100;
// {
//     const a=10;
//     {
//         // console.log(a);
//         const a=20;
//         console.log(a);
//     }
//     // console.log(a);
// }
// console.log(a);

const originalArray = [1, 2, 3, [4, 5, 6], { name: "xyz" }];
    
    const copiedArray = [...originalArray, [10,20,30]];
    
    copiedArray[0] = 999;
    copiedArray[3][0] = 100;
    
    console.log(originalArray[0]);//1
    console.log(copiedArray[0]);//999
    console.log(originalArray[3][0]);//100
    console.log(copiedArray[3][0]);//100