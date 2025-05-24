//Q. Second largest no. in given array

//input -[12,35,1,34] 
//output -34

const secondLargestNo=(arr)=>{
const sortedUniqueArr=Array.from(new Set(arr.sort((a,b)=>b-a)));
  if(sortedUniqueArr.length>=2){
     return sortedUniqueArr[1];
  }
}
const arr=[12,35,1,34,34];
// console.log(secondLargestNo(arr));
//time complexity-o(nlogn)


const optimiseSeondLargestElement=(arr)=>{
    let largest=-1;
    let secondLargest=-1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>largest){
          secondLargest=largest;
          largest=arr[i];
        }
        else if(arr[i]!=largest && arr[i]>secondLargest){
          secondLargest=arr[i];
        }
    }
    return secondLargest;
}

console.log(optimiseSeondLargestElement(arr));
//Time comlexity o(n)
//Space complexity o(1)

