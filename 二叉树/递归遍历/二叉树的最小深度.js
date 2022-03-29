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
// 这道题目要注意题目的意思，他要到最小的叶子节点的深度，所以首先要叶子节点，2要深度
// 最大深度的话因为要最深，自然而然就会到叶子，但是这个如果和那道题用一样的方法，就会错误
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  //左边为空，右边不为空，证明自身不是叶子节点，还是得继续右边向下
  else if (root.left === null) {
    return minDepth(root.right) + 1;
  }
  //右边为空，左边不为空，证明自身不是叶子节点，还是得继续右边向下
  else if (root.right === null) {
    return minDepth(root.left) + 1;
  }
  //两边都不为空，两边一起向下看谁比较小
  else {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }
};

