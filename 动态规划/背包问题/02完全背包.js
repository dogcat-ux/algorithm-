// 有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。
//暴力
/**
 * @param {number[]} weight
 * @param {number[]} value
 * @param {number} w
 * @return {number}
 */
//dp[i][j]   dp i指物品编号  j指代背包目前的容量
//dp[i][j]=max(dp[i-1][j],dp[i-1][j-weight[i]])
//初始化
//遍历顺序
//推导dp数组
function testWeightBagProblem(weight, value, w) {
  let len = weight.length;
  let dp = new Array(w + 1).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = weight[i]; j <= w; j++) {
      dp[j]=Math.max(dp[j],dp[j-weight[i]]+value[i])
    }
  }
  return dp[w];
}

function test() {
  console.log(testWeightBagProblem([1, 3, 5], [15, 20, 30], 4));
}

test();
