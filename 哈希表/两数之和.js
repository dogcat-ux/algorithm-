/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i]) && map.get(target - nums[i]) !== i) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
  return;
};
console.log(twoSum([3,3], 6))
