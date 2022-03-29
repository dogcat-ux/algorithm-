/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//调用库函数
//移除数组中和val相同的数
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]===val){
      nums.splice(i,1)
    }
  }
  return nums.length;
};
//双指针
var removeElement = function (nums, val) {
  let left =0;
  let right=nums.length-1;
  while(left<=right){
    if(nums[left]===val){
      nums[left]=nums[right];
      right--;
    }else{
      left++;
    }
  }
  return left;
};
console.log(removeElement([3,3],3))
