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
var countNodes = function (root) {
  if (root === null) {
    return 0;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};


/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (root === null) {
    return 0;
  }
  let left = dfs(root.left);
  let right = dfs(root.right);
  if (left > right) {
    return 2 ** right + countNodes(root.left);
  } else {
    return 2 ** left + countNodes(root.right);
  }
};

function dfs(root) {
  let res = 0;
  while (root) {
    root = root.left;
    res++;
  }
  return res;
}

