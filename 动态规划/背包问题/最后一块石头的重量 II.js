/**
 * @param {number[]} stones
 * @return {number}
 */
//最后一块石头的重量
//如果sum为偶数，那么就有可能两两全部消除掉，如果sum为奇数，无论怎样都不可能全部消除掉
    //    所以背包体积设置为Math.floor(sum/2),不管是奇数还是偶数，这都是消除掉最多石头的最佳选择，
//    这一部分石头的体积和为Math.floor(sum/2)，另一部分就是sum-Math.floor(sum/2)，最后剩下的一定是最小的石头重量
//stones 为价值，重量
// 背包的体积
//    dp数组的含义，i为石头的价值，j为背包目前的容量

//公式 sum/2=剩下的石头/2+被粉碎的石头/2;
//背包实时容量：j  1-sum/2
//重量数组，价值数组stones

var lastStoneWeightII = function (stones) {
      // let arr = stones.sort((a, b) => a - b);
      let sum = stones.reduce((a, b) => a + b);
      let len = stones.length;
      let dpLen = Math.floor(sum / 2)
      let dp = new Array(len + 1);
      for (let i = 0; i < len + 1; i++) {
        dp[i] = new Array(dpLen + 1).fill(0);
      }
      for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= dpLen; j++) {
          dp[i][j] = Math.max(dp[i - 1][j], j >= stones[i - 1] ? dp[i - 1][j - stones[i - 1]] + stones[i - 1] : dp[i - 1][j]);
        }
      }
      return sum - dp[len][dpLen] * 2;
    };
// lastStoneWeightII([2, 7, 4, 1, 8, 1])
