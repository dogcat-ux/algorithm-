/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//x,y
    //dp是路径
    //dp[i][j]=d[i-1]d[j]+1+d[i][j-1] //注意边界条件
var uniquePaths = function (m, n) {
      let dp = (new Array(m).fill(new Array(n).fill(1)));
      for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
      }
      console.log(dp)
      return dp[m - 1][n - 1]
    };
console.log(uniquePaths(3, 2))
console.log(uniquePaths(2, 3))
console.log(uniquePaths(3, 3))
// console.log(uniquePaths(2, 2))
