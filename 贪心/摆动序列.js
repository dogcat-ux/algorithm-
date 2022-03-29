/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划
var wiggleMaxLength = function (nums) {
  let up = 1;
  let down = 1;
  //摆动序列，连续的上坡或者连续的下坡不算，如果是连续的上坡的话就一直等于上一个下坡down+1，这样子连续的上坡不统计；
  //如果是一上一下，严格加1；
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }
  return Math.max(up, down);
};
console.log(wiggleMaxLength([0, 0, 0]))
console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))
