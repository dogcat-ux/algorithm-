/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
//inorder[] 3 9 15 20 7
//中序 后序--》层次
var buildTree = function (inorder, postorder) {
  if (inorder.length <= 0 || postorder.length <= 0) return null;
  console.log(inorder,postorder)
  let rootValue = postorder[postorder.length - 1];
  let root = new TreeNode(rootValue);
  let rTreeLeft = 3100;
  let rArr = [];
  let postRArr = [];
  let lArr = [];
  let postLArr = [];
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === rootValue) {
      lArr = inorder.slice(0, i);
      rArr = inorder.slice(i + 1);
      if (i < inorder.length - 1) rTreeLeft = inorder[i + 1];
      break;
    }
  }
  if (rTreeLeft !== 3100) {
    for (let i = 0; i < postorder.length; i++) {
      if (rTreeLeft === postorder[i]) {
        postLArr = postorder.slice(0, i);
        postRArr = postorder.slice(i, postorder.length - 1);
        break;
      }
    }
    root.left = buildTree(lArr, postLArr);
    root.right = buildTree(rArr, postRArr);
  } else {
    if(inorder[0]===rootValue){
      console.log(postorder,postorder.slice(0, postorder.length - 1))
      root.right = buildTree(rArr, postorder.slice(0, postorder.length - 1));
    }else{
      root.left = buildTree(lArr, postorder.slice(0, postorder.length - 1));
    }
  }
  return root;
};
