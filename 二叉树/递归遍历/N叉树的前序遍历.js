/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = [];
  helper(root, res);
  return res;
};

function helper(root, res) {
  if (root === null) return root;
  res.push(root.val);
  for (let child of root.children) {
    helper(child, res);
  }
  return root;
}
