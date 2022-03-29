//缩小增量插入排序
function shell_sort(nums) {
  let len = nums.length;
  for (let gap = len >> 1; gap >= 1; gap >>= 1) {
    //类似于直接插入排序算法
    let j = 0;
    for (let i = gap; i < len; i++) {
      let temp = nums[i];
      for (j = i; j >= 0 && nums[j - gap] > temp; j-=gap) {
        nums[j] = nums[j - gap];
      }
      nums[j] = temp;
    }
  }
  return nums;
}
console.log(shell_sort([6, 9, 456, 12, 3]))
console.log(shell_sort([9, 1, 7, 6, 5]))

