/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  if (nums.length < 3) return res;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res;
    if(i>=1&&nums[i]===nums[i-1])continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
// var threeSum = function (nums) {
//   let map = new Map();
//   // nums = Array.from(new Set([...nums]));
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], [i,(map.get(nums[i][1]) || 0) + 1])
//   }
//   console.log(map)
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let z = map.get(-(nums[i] + nums[j]))
//       if (z && z[1] > 0 && i !== j && i !== z[0] && j !== z[0]) {
//         res.push([nums[i], nums[j], -nums[i] - nums[j]])
//         map.set(-(nums[i] + nums[j]), z - 1);
//       }
//     }
//   }
//   return res;
// };
