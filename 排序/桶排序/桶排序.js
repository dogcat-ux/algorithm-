function sort(nums) {
  let count = 3;//桶的个数
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  //计算每个桶存放的数值范围，至少为1
  let range = Math.floor((max - min) / count) + 1
  // 创建二维数组，第一维表示第几个桶，第二维表示该桶里存放的数
  let buckets = Array.from(new Array(count)).map(() => (Array()));
  for (let v of nums) {
    // 计算元素应该分布在哪个桶
    let index = Math.floor((v - min) / range)
    // 防止index越界，例如当[5,1,1,2,0,0]时index会出现5
    index = index >= count ? count - 1 : index;
    let temp = buckets[index];
    let i = 0;
    for (i = temp.length; i >= 0 && v < temp[i - 1]; i--) {
      temp[i] = temp[i - 1];
    }
    temp[i] = v;
  }
  let res = [];
  for (const bu of buckets) {
    res.push(...bu);
  }
  nums = res;
  return nums;
}

console.log(sort([12, 45, 21, 564, 54]))
console.log(sort([12, 2, 21, 564, 54]))
