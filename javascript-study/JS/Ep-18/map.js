// //map
const numbers=[1,2,3,4,5];

// ex-1
// function double(x){
//   return x*2;
// }
// function triple(x){
//   return x*3;
// }
// function binary(x){
//   return x.toString(2);
// }

// const result=numbers.map(double);
// console.log(result);
// console.log(numbers.map(triple));
// console.log(numbers.map(binary));

// ex-2

const users=[
  {id:1, firstname:"chandra",lastname:"sah", age:25},
  {id:2, firstname:"donad",lastname:"trump", age:50},
  {id:3, firstname:"avesh",lastname:"khan", age:34},
  {id:4, firstname:"virat",lastname:"kohli", age:34},
  {id:5, firstname:"rohit",lastname:"sharma", age:34},   
];
//list full name
const result=users.map(user=>user.firstname+" "+user.lastname);
console.log(result);


