function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
      return null;
  }
  const node = new TreeNode(preorder[0]);
  const nodeIndex = inorder.indexOf(preorder[0]);
  const [leftPreorder, rightPreorder] = [preorder.slice(1, nodeIndex + 1), preorder.slice(nodeIndex + 1)];
  const [leftInorder, rightInorder] = [inorder.slice(0, nodeIndex), inorder.slice(nodeIndex + 1)];
  node.left = buildTree(leftPreorder, leftInorder);
  node.right = buildTree(rightPreorder, rightInorder);
  return node;
};

const tree = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(tree);
