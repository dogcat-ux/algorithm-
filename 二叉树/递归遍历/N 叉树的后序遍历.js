/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];
  helper(root, res);
  return res;
};

function helper(root, res) {
  if (root === null) return null;
  for (const child of root.children) {
    helper(child,res);
  }
  res.push(root.value);
  return root;
}
