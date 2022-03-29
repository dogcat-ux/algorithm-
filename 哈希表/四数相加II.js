/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let n = nums1.length;
  let map = new Map();
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map.set(nums1[i] + nums2[j], (map.get(nums1[i] + nums2[j]) || 0)+1);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        res += map.get(-(nums3[i] + nums4[j]))||0
    }
  }
  return res;
};
