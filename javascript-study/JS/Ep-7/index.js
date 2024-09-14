//ex-1

// function a(){
//     console.log(x);
// }
// var x=10;
// a();



//ex-2
function a(){
    var x=10;
    b();
    function b(){
        console.log(x);
    };
}
a();