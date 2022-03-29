/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//也就是加法的总和 x=(target + sum)/2
//背包实时容量：j  1-x
//重量数组，价值数组nums
//dp[i][j]表示当背包容量为j的时候，有多少种方法让最终目标等于

var findTargetSumWays = function(nums, target) {
  let len=nums.length;
  let sum=nums.reduce((a,b)=>a+b);
  if(Math.abs(target)>sum){
    return 0;
  }
  if((target+sum)%2)return 0;

  let dpLen=(target+sum)/2
  let dp=new Array(dpLen+1).fill(0);
  //dp[0]  容量为0，
  dp[0]=1;//代表(target+sum)/2=0,有一种方法
  //初始化的dp数组是物品1
  for (let i = 0; i < len ; i++) {
    for (let j = dpLen; j>=nums[i] ; j--) {
      //本质上这个dp[j]存储的就是达到j这个容量的方法数,
      // 达到这个拿了nums[i]]这个数就是dp[j-nums[i]]种方法，不拿就是dp[j]种方法
      //因为其实是取数目达到加法总和，本质上还是背包的取或者不取
      dp[j]=dp[j-nums[i]]+dp[j];
    }
  }
  console.log(dp)
  return dp[dpLen];
};
console.log(findTargetSumWays( [1,1,1,1,1],3))
console.log(findTargetSumWays( [1],1))
