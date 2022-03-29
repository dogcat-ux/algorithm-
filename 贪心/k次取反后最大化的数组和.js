/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let arr = nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  console.log(arr)
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (k > 0 && arr[i] < 0) {
      sum -= arr[i];
      arr[i] = Math.abs(arr[i]);
      k--;
    } else {
      sum += arr[i];
    }
  }
  if (k > 0 && k % 2) {
    sum = sum - 2 * Math.abs(arr[arr.length-1])
  }
  return sum;
};
// console.log(largestSumAfterKNegations([4, 2, 3], 1))
// console.log(largestSumAfterKNegations([3, -1, 0, 2], 3))
// console.log(largestSumAfterKNegations([-2,9,9,8,4],5))
console.log(largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6))
