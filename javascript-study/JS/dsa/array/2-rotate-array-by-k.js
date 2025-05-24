//Q.  Rotate array by k

//Given an integer array nums, rotate the array to the right by k steps
//where k is non negative.

//inputs: nums=[1,2,3,4,5,6,7] , k=3 ----->>output:[5,6,7,1,2,3,4]
//inputs: nums=[-1,-100,3,99] , k=2 ----->>output:[3,99,-1,-100]

//1 solution
const rotateArrayByK = (nums, k) => {
    let size = nums.length;
    if (size > k) {
        k = k % size;
    }
    let rotatedArr = nums.splice(size - k, size);
    nums.unshift(...rotatedArr);
    return nums;
}

const nums = [-1, -100, 3, 99];
const k = 2;
// console.log(rotateArrayByK(nums,k));
//time complexity o(n)


//solution 2
const rotateArrayByKOptimse = (nums, k) => {
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1)

    return nums;
}
const reverse=(nums,left,right)=>{
  while(left<right){
    const temp=nums[left];
    nums[left++]=nums[right];
    nums[right--]=temp;
  }
}

console.log(rotateArrayByKOptimse(nums, k));
//Time complexity o(n)
