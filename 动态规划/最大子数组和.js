/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划
var maxSubArray = function (nums) {
  if (nums.length <= 0) return 0;
  let dp = [nums[0]];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp.push(Math.max(dp[i - 1] + nums[i], nums[i]));
    max = Math.max(max, dp[i]);
  }
  return max;
};
//贪心
var maxSubArray = function (nums) {
  let count = 0;//局部最优
  let sum = -Number.MAX_VALUE;//全局最优
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    if (count > sum) {
      sum = count;
    }
    if(count<0) count=0;
  }
  return sum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSubArray([1]))
console.log(maxSubArray([-1]))
// console.log(maxSubArray([5, 4, -1, 7, 8]))
