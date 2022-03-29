/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let slow = 0;
  let fast = 0;
  let sum = 0;
  let res = 0;
  while (fast < nums.length) {
    sum+=nums[fast];
    while(sum>=target){
      res=Math.min(res||(fast-slow+1),fast-slow+1);
      sum-=nums[slow];
      slow++;
    }
    fast++;
  }
  return res;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
