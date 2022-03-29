/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let stack = [];//递减栈
  //i%n
  let i = 0;
  let j = -1;
  let n = nums.length
  let res = new Array(n).fill(-1);
  while (j !== 1) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      let temp = stack.pop();
      res[temp] = nums[i];
    }
    stack.push(i)
    if (i === n - 1) {
      j += 1;
    }
    i = (++i) % n;
  }
  return res;
};
console.log(nextGreaterElements([1,2,3,4,3]))
