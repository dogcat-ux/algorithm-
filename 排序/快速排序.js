/**
 * @param {number[]} nums
 * @return {number[]}
 */
//快速排序
//[] [] []
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

function quickSort(nums, start, end) {
  if (start >= end) {
    return;
  }
  let mid = sort(nums, start, end);
  quickSort(nums, start, mid - 1);
  quickSort(nums, mid + 1, end);
}

function sort(nums, start, end) {
  if (start >= end) {
    return;
  }
  let center = nums[start];
  let left = start;
  let right = end;
  while (left < right) {
    while (left < right && nums[right] > center) {
      right--;
    }
    if(left<right){
      nums[left]=nums[right];
      left++;
    }
    while (left < right && nums[left] < center) {
      left++;
    }
    if(left<right){
      nums[right]=nums[left];
      right--;
    }
  }
  nums[left]=center;
  // console.log(nums, start, end,left)
  return left;
}
