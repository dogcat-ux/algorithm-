// 时间复杂度（平均）：O（nlogn）
// 时间复杂度（最坏）：O（nlogn）
// 时间复杂度（最好）：O（nlogn）
// 空间复杂度：O（n）
// 排序方式：Out-place
// 稳定性：稳定
//时间复杂度nlog(n)
//先递归拆分到最小，然后合并，合并和拆分的组合是一样的
//递归拆分，回溯合并
//合并两个有序数组
function merge(arrL, arrR) {
  let l = 0;
  let r = 0;
  let res = [];
  while (l < arrL.length && r < arrR.length) {
    if (arrL[l] < arrR[r]) {
      res.push(arrL[l]);
      l++;
    } else {
      res.push(arrR[r]);
      r++;
    }
  }
  while (l < arrL.length) {
    res.push(arrL[l]);
    l++;
  }
  while (r < arrR.length) {
    res.push(arrR[r]);
    r++;
  }
  return res;
}

//退出递归的条件是数组只剩下一个数，自动有序
function mergesort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor((arr.length) / 2);
  let arrL = arr.slice(0, mid);
  let arrR = arr.slice(mid);
  return merge(mergesort(arrL), mergesort(arrR));
}

console.log(mergesort([1, 546, 22, 22, 22, 64, 231, 21]))
