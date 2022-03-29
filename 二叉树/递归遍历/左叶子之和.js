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
var sumOfLeftLeaves = function (root) {
  if (root.left === null && root.right === null) {
    return 0;
  }
  return sum(root, -1)
};

//0左 1右
function sum(root, type) {
  if (root === null) return 0;
  if (root.left === null && root.right === null && type === 0) {
    return root.val;
  }
  return sum(root.left, 0) + sum(root.right, 1)
}


