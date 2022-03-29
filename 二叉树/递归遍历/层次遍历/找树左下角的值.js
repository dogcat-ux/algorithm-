/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//bfs 层次遍历
var findBottomLeftValue = function (root) {
  let res = []
  let value=0;
  res.push(root)
  while (res.length>0) {
    let node = res.shift();
    value=node.val;
    if (node.right) res.push(node.right)
    if (node.left) res.push(node.left)
  }
  return value
};
// function bfs(root) {
//   let res = []
//   let value=0;
//   res.push(root)
//   while (res.length>0) {
//     let node = res.unshift();
//     value=node.val;
//     if (node.right) res.push(node.right)
//     if (node.left) res.push(node.left)
//   }
//   return value
// }


//dfs  没有跑通全部用例
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//相当于最大左深度  不一定是叶子节点
var findBottomLeftValue = function (root) {
  if (root.left === null && root.right === null) {
    return root.val;
  }
  return dfs(root, 0, 1).value;
};

//左0 右1
function dfs(root, type, depth) {
  if (root === null) return {
    depth: -1,
    value: null
  };
  if (root.left === null && type === 0) {
    return {
      depth: depth,
      value: root.val
    };
  }
  let node1 = dfs(root.left, 0, depth + 1);
  let node2 = dfs(root.right, 1, depth + 1);
  if (node1.depth > node2.depth) {
    return {...node1}
  }
  return {...node2};
}

