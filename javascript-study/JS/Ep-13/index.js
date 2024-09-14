///// funtion statement////

// function a(){
//     console.log("a is called");
// }
// a();


////// function expression//////

// var b=function(){
//     console.log("b is called");
// }
// b();

////difference between function statement and function expression
// a();
// b();
// funtion statement
// function a(){
//     console.log("a is called");
// }

// function expression
// var b=function(){
//     console.log("b is called");
// }


//* function statement is konwn as function declaration 


/////anonymous function////
  //* a function without a name is konwn as anonymous function

// function(){  }

///////named function Expression/////
// var a=function b(){
//     console.log("b is called");
// }

// a();


/////difference between parameter and arguments/////
//   function a(parameter1,parameter2){
//       console.log(parameter1,parameter2);
//   }
//   a(1,2);


//////////////first class function///////

function a(fcf){
   console.log(fcf);
    fcf();
}

a(function b(){
    console.log("b is called");
});