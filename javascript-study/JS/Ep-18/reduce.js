//reduce
// ex-1
// const result3=numbers.reduce((acc,curr)=>acc+curr,0);
// console.log(result3);

// const max=numbers.reduce((max,curr)=>{
//     if(curr>max){
//         max=curr;
//     }
//     return max;
// },0);
// console.log(max);

// ex-2
//find unique age like {25:1,34:1,50:1};

// const userAgeUnique=users.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age]++;
//     }else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{});
// console.log(userAgeUnique);

// ex-3
//print first name of age greater than 30

const userReduceResult=users.reduce((acc,curr)=>{
  if(curr.age>30){
    acc.push(curr.firstname);
  }
  return acc;
},[]);

console.log(userReduceResult);