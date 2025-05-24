/*Q. Remove duplicates from sorted array
Given an integer array nums sorted i non-decreasing order , remove the 
duplicates in-place such that each unique elements appears
only once.The relative order of the elements should be kept the 
same . Then return the number of unique elements in nums.
*/

//Input:[1,1,2]    ----------------> output:2,[1,2,_]
//Input:[0,0,1,1,1,2,2,3,3,4]    --->output:5,[0,1,2,3,4,_,_,_,_,_]

//solution 1
const removeDuplicate=(nums)=>{
    for (let i = 0; i < nums.length-1; i++) {
         if(nums[i]==nums[i+1]){
            nums.splice(i+1,1);
            i--;
         }
        
    }
    return nums.length;
}

const nums=[0,0,1,1,1,2,2,3,3,4];
// console.log(removeDuplicate(nums)); 
//Time complexity o(n)
//space complexity o(1)

//solution 2

const removeDuplicateOptimise=(nums)=>{
   if(nums.length==0) return 0;
   let i=0;
   for (let j = 1; j < nums.length; j++) {
     if(nums[i]!==nums[j]){
        i++;
        nums[i]=nums[j];
     }
     return i+1;
    
   }
}
// console.log(removeDuplicateOptimise(nums));
//Time complexity o(n)
//Space complexity o(1)


//Q. remove duplicate element from array
const removeDuplicateElement=(arr)=>{
   const set=new Set();
   let removedElement=[];
  
  for(let i=0;i<arr.length;i++){
      if(!set.has(arr[i])){
          set.add(arr[i]);
          removedElement.push(arr[i]);
      }
  }
   return removedElement;
}
console.log(removeDuplicateElement(nums));
