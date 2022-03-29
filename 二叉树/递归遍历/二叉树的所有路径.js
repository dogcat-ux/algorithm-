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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let res = [];
  let all = []
  path(root, res, all);
  return all;
};

function path(root, res, all) {
  if (root === null) {
    res.push(null);
    return;
  }
  res.push(root.val);
  if (root.left === null && root.right === null) {
    all.push([...res].join("->"));
  }
  path(root.left, res, all);
  res.pop();
  path(root.right, res, all);
  res.pop();
}
