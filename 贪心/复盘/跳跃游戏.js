var canJump = function (nums) {
  if (nums.length === 1) return true
  let cover = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > cover) {
      return false;
    }
    cover = Math.max(cover, nums[i] !== 0 ? (nums[i] + i) : 0);
    if (cover >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
