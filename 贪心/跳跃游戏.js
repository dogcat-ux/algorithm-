/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;
  let sum = 0;
  //sum是能走的步数的最大总和，i必须小于等于sum才走得到
  for (let i = 0; i <= sum; i++) {
    sum = Math.max(sum, i + nums[i]);
    if (sum >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
console.log(canJump([2, 1, 3, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([0, 2, 3]))
