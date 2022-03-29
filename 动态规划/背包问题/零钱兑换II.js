/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
//方法数
//amount=nums[i]
var change = function(amount, coins) {
  let len=coins.length;
  let dp=new Array(amount+1).fill(0);
  dp[0]=1;
  for (let i = 0; i < len; i++) {
    for (let j = coins[i]; j <=amount; j++) {
        dp[j]+=dp[j-coins[i]];
    }
  }
  console.log(dp)
  return dp[amount];
};
console.log(
    change(5, [1, 2, 5])
)
