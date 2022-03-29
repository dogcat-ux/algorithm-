// var sortArray = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let temp = nums[i];
//     for (let j = i; j >= 0; j--) {
//       if (nums[j - 1] > temp) {
//         nums[j] = nums[j - 1];
//       } else {
//         nums[j] = temp;
//         break;
//       }
//     }
//   }
//   return nums;
// };
var sortArray = function (nums) {
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];
    for (j = i; j >= 0 && nums[j - 1] > temp; j--) {
      nums[j] = nums[j - 1];
    }
    nums[j] = temp;
  }
  return nums;
}
console.log(sortArray([6, 9, 456, 12, 3]))
console.log(sortArray([9, 1, 7, 6, 5]))
