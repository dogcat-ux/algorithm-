/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//长度最小的子数组
// 滑动窗口/快慢指针
var minSubArrayLen = function (target, nums) {
  let slow=0;
  let fast=0;
  let sum=0;
  let len=0;
  let res=Number.MAX_VALUE;
  while(fast<nums.length){
    sum+=nums[fast];
    len+=1;
    while(sum>=target){
      res=Math.min(res,len)
      sum-=nums[slow];
      slow++;
      len--;
    }
    fast++;
  }
  return res===Number.MAX_VALUE?0:res;
};
// target = 11, nums = [1,1,1,1,1,1,1,1]
console.log(minSubArrayLen(7,[2,3,1,2,4,3]))
console.log(minSubArrayLen(11,[1,1,1,1,1,1,1,1]))
