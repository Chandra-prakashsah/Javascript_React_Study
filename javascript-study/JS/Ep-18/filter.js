
//filter

// ex-1
// function isEven(x){
//     return x%2===0;
//   }
//   const result1=numbers.filter(isEven);
//   console.log(result1);
  
//   const result2=numbers.filter(x=>x%2===0);
//   console.log(result2);


// ex-2 
//list first name below age 30
const results=users.filter(user=>user.age<30).map(user=>user.firstname);
console.log(results);