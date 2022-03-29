/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // [0,1]  1--->0
  let start = []
  let len = prerequisites.length
  if(len<=0)return [...(new Array(numCourses).keys())];
  let count = new Array(numCourses).fill(0);
  let res = [];
  for (let i = 0; i < len; i++) {
    //统计入度
    count[prerequisites[i][0]] += 1;
  }
  //查找入度为0的数
  for (let i = 0; i < numCourses; i++) {
    //统计入度
    //count的索引是课程，数值是入度
    if (count[i] === 0) {
      start.push(i)
    }
  }
  while (start.length > 0) {
    let temp = start.pop();
    res.push(temp)
    for (let pre of prerequisites) {
      if (pre[1] === temp && count[pre[0]] > 0) {
        count[pre[0]]--;
        if (count[pre[0]] === 0) {
          start.push(pre[0]);
        }
      }
    }
  }
  return res.length === numCourses ? res : [];
};
console.log(
    // findOrder(2, [])
    // findOrder(2, [[1,0]])
    findOrder(2, [[0,1]])
    // findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])
)
