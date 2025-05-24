//Q- Palindrome number
// An integer is a palindrome when it reads the same forward and backward.

//input: x-121  ----->output :true
//input:x-10   ------>output: false
function isPalindrome(x){
   return x<0?false :x===+x.toString().split('').reverse().join('');
}
const res=isPalindrome(121);
console.log("isPalindrome:->",res);   
