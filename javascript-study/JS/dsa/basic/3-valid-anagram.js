//Q. Valid anagram
//an anagaram is a word or phrase , using all originals letters exactly once

//input:(s="anagram"),(t="nagaram")=>  output---->true
//input:(s="cat"),(t="rat")=>  output---->true

//solution-1
// function isAnagram(s,t){
//     s=s.toLowerCase().split('').sort().join('');
//     t=t.toLowerCase().split('').sort().join('');
//     return s===t;
// }

//solution-2
function isAnagram(s,t){
    let obj1={};
    let obj2={};
    if(s.length!=t.length) return false;;
    for(let i=0;i<s.length;i++){
        obj1[s[i]]=(obj1[s[i]] ||0)+1;
        obj2[t[i]]=(obj2[t[i]] ||0)+1;
    }
   for (const key in obj1) {
      if(obj1[key]!==obj2[key]) return false;
   }
   return true;
}


console.log(isAnagram('aacc','ccac'));