
//Time and Space complexity


// const getNumber=(nums)=>{
//     for (let i = 0; i < nums.length; i++) {
//         if(i==3) return nums[i]; 
//     }
// }
const getNumber=(nums)=>{
   return nums[0]
}
const array=[5,3,2,8];
console.time("time");
console.log(getNumber(array));
console.timeEnd("time");