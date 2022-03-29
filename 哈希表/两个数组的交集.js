/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let map1=new Set();
  let map2=new Set();
  let res=[];
  for (let i = 0; i < nums1.length; i++) {
    map1.add(nums1[i])
  }
  for (let i = 0; i < nums2.length; i++) {
    map2.add(nums2[i])
  }
  for (const value of map1) {
    if(map2.has(value)){
      res.push(value);
    }
  }
  return res;
};
