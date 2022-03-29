/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let len=s.length;
  if(len!==t.length)return false;
  let map1=new Map();
  let map2=new Map();
  for (let i = 0; i < len; i++) {
    map1.set(s[i],(map1.get(s[i])||0)+1)
    map2.set(t[i],(map2.get(t[i])||0)+1)
  }
  for (const [key,value] of map1) {
    if(value!==map2.get(key)){
      return false
    }
  }
  return true
};
