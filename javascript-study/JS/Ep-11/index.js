// ex-1

// function x(){
//     var a=10;
//     setTimeout(()=>{
//         console.log(a);
//     },1000);
//     console.log("hello javascript");
// }
// x();

// ex-2 

// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000);
//     }
//     console.log("hello javascript");
// }
// x();

// ex-3
// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000);
//     }
//     console.log("hello javascript");
// }
// x();

// ex-4
function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(()=>{
                console.log(x);
            },x*1000);
        }
        close(i);
    }
    console.log("hello javascript");
}
x();