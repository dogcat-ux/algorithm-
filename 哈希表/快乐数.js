/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let sum=0;
  let set=new Set();
  while (sum!==1){
    while(n){
      sum+=(n%10)**2;
      n=Math.floor(n/10)
    }
    n=sum;
    if(set.has(sum)){
      return false
    }
    if(sum===1){
      return true;
    }
    set.add(sum);
    sum=0;
  }
  return true;
};
console.log(isHappy(19))
// let sum=0
// let n=68;
// while(n){
//   sum+=(n%10)**2;
//   n=Math.floor(n/10)
// }
// console.log(sum);
