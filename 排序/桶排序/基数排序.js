//https://juejin.cn/post/6844903950978662414
function getDigits(nums) {
  nums=Array.from(nums)
  let len = nums.length;
  if(len<=0)return 0;
  let maxLen = 0;
  nums.forEach(v => {
    maxLen = Math.max(maxLen, v.toString().length)
  })
  return maxLen;
}

function sort(nums) {
  // 第一维表示位数即0-9，第二维表示里面存放的值
  let arr = Array.from(Array(10)).map(() => Array());
  let max = Math.max(...nums);
  let maxDigits = getDigits(max);
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    // 用0把每一个数都填充成相同的位数
    nums[i] = (nums[i] + '').padStart(maxDigits, 0);
    // 先根据个位数把每一个数放到相应的桶里
    let temp = nums[i][nums[i].length - 1];
    arr[temp].push(nums[i]);
  }
  //遍历每个位数  数组存储位数，i=0就是最大位，i=maxDigits-1就是个位
  //从十位开始
  for (let i = maxDigits - 2; i >= 0; i++) {
    //循环每一个桶
    for (let j = 0; j <= 9; j++) {
      //temp为一个桶
      let temp = arr[j];
      let len = temp.length;
      //循环桶内元素
      while (len--) {
        //先进先出，保持稳定
        let str = temp.shift();
        //根据外层循环的位数来变换元素在哪个桶
        arr[str[i]].push(str);
      }
    }
  }
  // 修改回原数组
  let res = [].concat.apply([], arr);
  nums.forEach((val, index) => {
    nums[index] = +res[index];
  });
  return nums;
}


console.log(sort([10, 215, 465, 5]))
