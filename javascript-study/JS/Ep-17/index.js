//higher order function

//ex-1

// function x(y){
//     y();
// }

// x(function(){console.log("hello")});

//ex-2

// const area=function(radius){
//   return Math.PI*radius*radius;
// }
// const circumference=function(radius){
//   return 2*Math.PI*radius;
// }
// const diameter=function(radius){
//   return 2*radius;
// }


// const radius=[5,10,15,20];
// Array.prototype.calculate=function(logic){
//   let result=[];
//   for(let i=0;i<this.length;i++){
//     result.push(logic(this[i]));
//   }
//   return result;
// }

// console.log(radius.calculate(area));
// console.log(radius.calculate(circumference));
// console.log(radius.calculate(diameter))
// console.log(radius.map(area));

// ex-3
const sum=(a,b)=>{
  return a+b;
}
const subs=(a,b)=>{
  return a-b;
}

const calculate=(a,b,logic)=>{
  return logic(a,b);
}

console.log(calculate(5,10,sum));
console.log(calculate(10,5,subs));