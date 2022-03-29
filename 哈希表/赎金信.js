/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map1=new Map();
  for (let i = 0; i < magazine.length; i++) {
    map1.set(magazine[i],(map1.get(magazine[i])||0)+1)
  }
  for (let i = 0; i < ransomNote.length; i++) {
    console.log(ransomNote[i],map1.get(ransomNote[i]))
    if(!map1.get(ransomNote[i])){
      return false;
    }else{
      map1.set(ransomNote[i],map1.get(ransomNote[i])-1)
    }
  }
  return true;
};
console.log(canConstruct("aab","baa"))
