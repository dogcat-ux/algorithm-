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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  return dfs(root, 0, targetSum);
};

function dfs(root, res, targetSum) {
  if (root === null) return false;
  res += root.val;
  if (root.left === null && root.right === null) {
    console.log(res)
    if (res === targetSum) {
      return true;
    } else {
      return false;
    }
  }
  let flag1 = dfs(root.left, res, targetSum);
  if (flag1) return true;
  // res -= root.val;
  return dfs(root.right, res, targetSum);
}
