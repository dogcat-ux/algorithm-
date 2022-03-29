/**
 * @param {number} n
 * @return {number}
 */
//
// 两个维度  加，乘
//         a*b*c...,a+b+c...=n
//         dp是乘积，dp[i]=dp[j]+dp[N-j]

var integerBreak = function (n) {
  if (n <= 3) return n - 1;
  let dp = new Array(n+1).fill(0);
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3
  for (let i = 4; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {
      dp[i] = Math.max(dp[j] * dp[i - j], dp[i]);
    }
  }
  return dp[n];
}
console.log(integerBreak(10))
