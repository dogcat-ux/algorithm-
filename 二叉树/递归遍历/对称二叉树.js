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
 * @return {boolean}
 */
//左右子树是否镜像，求出镜像树
var isSymmetric = function (root) {
  return isMirror(root.left, root.right);
};

function isMirror(L, R) {
  if (L === null && R === null) return true;
  if (L === null || R === null) return false;
  if (L.val === R.val) {
    return isMirror(L.left, R.right) && isMirror(L.right, R.left);
  } else {
    return false;
  }
}
