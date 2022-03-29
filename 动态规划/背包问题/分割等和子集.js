/**
 * @param {number[]} nums
 * @return {boolean}
 */
//等和子集
//遍历数组
//dp-->背包问题
//     dp数组--》可选范围内集合的和的最大值
// sum/2 背包的体积
//    nums，nums重量数组和价值数组
var canPartition = function (nums) {
  let sum = nums.reduce((previousValue, currentValue) => previousValue + currentValue);
  if (!sum % 2) return false;
  let len = nums.length;
  let dp = new Array(len + 1);
  for (let i = 0; i < len + 1; i++) {
    dp[i] = new Array(Math.floor(sum / 2) + 1).fill(0);
  }
  //i 是商品价值
  //j 是背包容量
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= sum / 2; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], j >= nums[i - 1] ? dp[i - 1][j - nums[i - 1]] + nums[i - 1] : dp[i - 1][j]);
      if (dp[i][j] === sum / 2) return true;
    }
  }
  return false;
};
///

