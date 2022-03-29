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
console.log(sortArray([10, 213, 0, 0, 45, 6]))
console.log(sortArray([10, 213, 0, 0, 45, 6, 45, 1, 2]))
