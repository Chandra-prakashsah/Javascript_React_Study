//what is callback funtion

// setTimeout(() => {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(() => {
//   console.log("y");
// })

//closure demo with Event Listener
function listener(){
  let count=0;
  document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("clicked",++count);
  })
}

listener();