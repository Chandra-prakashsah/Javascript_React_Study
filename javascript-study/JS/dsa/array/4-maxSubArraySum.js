//Q. Given an integer array nums,find the subarray with the largest sum,
// and return its sum.

//input:[-2,1,-3,4,-1,2,1,-5,4]     ---------output:6, [4,-1,2,1]
//input:[5,4,-1,7,8]     ---------output:23, [4,-1,2,1]

//solution-1
const maxsubArray = (nums) => {
    let maxSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let currSum = 0;
        for (let j = i; j < nums.length; j++) {
            currSum = currSum + nums[j];
            if (currSum > maxSum) {
                maxSum = currSum;
            }
        }
    }
    return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxsubArray(nums));

//solution-1
const maxsubArrayOptimised = (nums) => {
    let maxSum = nums[0];
    let sum=0;
    for (let i = 0; i < nums.length; i++) {
        sum=sum+nums[i];
        if(maxSum<sum){
            maxSum=sum;
        }
        if(sum<0){
            sum=0;
        }
    }
    return maxSum;
}

console.log(maxsubArrayOptimised(nums));