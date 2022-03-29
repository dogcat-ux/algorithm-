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
    if (left < right) {
      nums[left] = nums[right];
      left++;
    }
    while (left < right && nums[left] < center) {
      left++;
    }
    if (left < right) {
      nums[right] = nums[left];
      right--;
    }
  }
  nums[left] = center;
  // console.log(nums, start, end,left)
  return left;
}

// 冒泡排序
var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length - i; j++) {
      if (nums[j - 1] > nums[j]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      }
    }
  }
  return nums;
};

//归并排序
//两个有序数组的合并
var sortArray = function (nums) {
  function merger(nums1, nums2) {
    let l1 = 0;
    let l2 = 0;
    let res = [];
    while (l1 < nums1.length && l2 < nums2.length) {
      if (nums1[l1] > nums2[l2]) {
        res.push(nums2[l2])
        l2++;
      } else {
        res.push(nums1[l1])
        l1++;
      }
    }
    while (l1 < nums1.length) {
      res.push(nums1[l1])
      l1++;
    }
    while (l2 < nums2.length) {
      res.push(nums2[l2])
      l2++;
    }
    return res;
  }

  function sort(nums) {
    if (nums.length <= 1) return nums;
    let max = nums.length;
    let min = 0;
    let mid = Math.floor((min + max) / 2);
    return merger(sort(nums.slice(min, mid)), sort(nums.slice(mid, max)))
  }

  return sort(nums);
};

//堆排序
var sortArray = function (nums) {

}

console.log(sortArray([10, 213, 0, 0, 45, 6]))
console.log(sortArray([10, 213, 0, 0, 45, 6, 45, 1, 2]))
