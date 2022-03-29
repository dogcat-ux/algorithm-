/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let g1=g.sort((a,b)=>a-b);
  let s1=s.sort((a,b)=>a-b);
  let i=g.length-1;
  let j=s.length-1;
  let cnt=0;
  while(i>=0&&j>=0){
    if(g1[i]<=s1[j]){
      cnt++;
      i--;
      j--;
    }else{
      i--;
    }
  }
  return cnt;
};
console.log(findContentChildren([1,2],[1,2,3]))
