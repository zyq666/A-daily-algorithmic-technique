class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const list = [null, 33, 17, 50, 13, 18, 34, 58, null, 16, null, 25, null, null, 51, 66, null, null, null, null, null, null, 19, 27]
const head = new Node(list[1]);

const getTree = (root, i) => {
  if (!root) return;
  if (list[2 * i]) root.left = new Node(list[2 * i]);
  if (list[2 * i + 1]) root.right = new Node(list[2 * i + 1]);
  getTree(root.left, i * 2);
  getTree(root.right, i * 2 + 1);
}

getTree(head, 1);

let parentNode;
const findNode = (tree, value) => {
  if (!tree) return -1;
  if (tree.value === value) return {node: tree, parentNode};
  parentNode = tree;
  return findNode(tree.value > value ? tree.left : tree.right, value);
}

const insertValue = (tree, value) => {
  if (!tree) return;
  console.log(tree.value, value);
  if (tree.value > value) {
    if (!tree.left) {
      tree.left = new Node(value);
    } else {
      return insertValue(tree.left, value);
    }
  } else {
    if (!tree.right) {
      tree.right = new Node(value);
    } else {
      return insertValue(tree.right, value);
    }
    
  }
}
insertValue(head, 100);
let minNodeParent;
const minNode = (tree) => {
  if (!tree.left) return {parent: minNodeParent, node: tree};
  minNodeParent = tree;
  return minNode(tree.left);
}
const mn = minNode(head);

const deleteNode = (tree, value) => {
  const {node, parentNode} = findNode(tree, value);
  if (!node.left || !node.right) {
    parentNode[node.value < parentNode.value ? 'left' : 'right'] = node.left || node.right;
  }
  if (!node.left && !node.right) {
    parentNode[node.value < parentNode.value ? 'left' : 'right'] = null;
  }
  const {node: mn, parent} = minNode(node.right);
  parentNode[node.value < parentNode.value ? 'left' : 'right'] = mn;
  mn.right = parent;
  parent[mn.value < parent.value ? 'left' : 'right'] = null; 
}
deleteNode(head, 18)
console.log(head);

