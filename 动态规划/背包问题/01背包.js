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
  let dp = new Array(len + 1);
  for (let i = 0; i < len + 1; i++) {
    dp[i] = new Array(w + 1).fill(0);
  }
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= w; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], j >= weight[i - 1] ? dp[i - 1][j - weight[i - 1]] + value[i - 1] : dp[i - 1][j])
    }
  }
  return dp[len][w];
}

function test() {
  console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();

//-------------------------------------------------------------------------
//
// function testweightbagproblem(wight, value, size) {
//   const len = wight.length,
//       dp = Array.from({length: len + 1}).map(
//           () => Array(size + 1).fill(0)
//       );
//
//   for (let i = 1; i <= len; i++) {
//     for (let j = 0; j <= size; j++) {
//       if (wight[i - 1] <= j) {
//         dp[i][j] = Math.max(
//             dp[i - 1][j],
//             value[i - 1] + dp[i - 1][j - wight[i - 1]]
//         )
//       } else {
//         dp[i][j] = dp[i - 1][j];
//       }
//     }
//   }
//
// //   console.table(dp);
//
//   return dp[len][size];
// }
//
// function testWeightBagProblem2(wight, value, size) {
//   const len = wight.length,
//       dp = Array(size + 1).fill(0);
//   for (let i = 1; i <= len; i++) {
//     for (let j = size; j >= wight[i - 1]; j--) {
//       dp[j] = Math.max(dp[j], value[i - 1] + dp[j - wight[i - 1]]);
//     }
//   }
//   return dp[size];
// }
//
//
// function test() {
//   console.log(testweightbagproblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
// }
//
// test();
