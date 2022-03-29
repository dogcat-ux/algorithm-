/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];//递减栈
  let n = nums2.length
  let res = new Array(n).fill(-1);
  let res2=[]
  let map=new Map();
  for (let i = 0; i < n; i++) {
    map.set(nums2[i],i)
    while (stack.length>0 && nums2[stack[stack.length - 1]] < nums2[i]) {
      let j = stack.pop();
      res[j] = nums2[i];
    }
    stack.push(i)
  }
  for (let i = 0; i < nums1.length; i++) {
    console.log(map.get(nums1[i]))
    res2.push(res[map.get(nums1[i])]);
  }
  return res2;
};
console.log(nextGreaterElement([4,1,2],[1, 3, 4, 2]))
