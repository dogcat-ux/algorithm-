// TODO 有序数组的平方
// /给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortedSquares = function (nums) {
  let left=0;
  let right=nums.length-1;
  let res=[];
  while(left<right){
    if(nums[left]**2>=nums[right]**2){
      res.unshift(nums[left]**2)
      left++;
    }else {
      res.unshift(nums[right]**2);
      right--;
    }
  }
  res.unshift(nums[left]**2)
  return res;
};
// console.log(sortedSquares( [-4,-1,0,3,10]))
