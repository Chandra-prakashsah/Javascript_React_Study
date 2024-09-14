

// ex-1
// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// const z=x();
// console.log(z);
// z();


// ex-2
function x(){
    var a=10;
    function y(){
        console.log(a);
        function z(){
            console.log(a);
        }
        z();
    }
     y();
}
x();