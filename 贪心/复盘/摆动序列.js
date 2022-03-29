var wiggleMaxLength = function (nums) {
  let len = nums.length;
  let pre = 0;
  let res = 1;
  for (let i = 0; i < len; i++) {
    let temp = nums[i + 1] - nums[i]
    if ((pre < 0 && temp > 0) || (temp < 0 && pre > 0)) {
      pre = temp;
      res++;
    }
  }
  return res;
};
console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))
