var jump = function (nums) {
  let curIndex = 0;//当前覆盖范围的末尾index
  let nextIndex = 0//在当前范围中的可以跳到的最远的index
  let steps = 0//跳跃数
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex)
    //如果要走出覆盖范围了
    if (i === curIndex) {
      //把下一个覆盖范围启动
      curIndex = nextIndex;
      //跳跃数++
      steps++
    }
  }

  return steps
};
