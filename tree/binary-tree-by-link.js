class Node { 
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node("我");
root.left = new Node("爸爸");
root.right = new Node("妈妈");
root.left.left = new Node("爷爷");
root.left.right = new Node("奶奶");
root.right.left = new Node("外公");
root.right.right = new Node("外婆");

//              我
//   爸爸                  妈妈
//爷爷   奶奶            外公   外婆


// 前序遍历：我 -》爸爸 -》爷爷 -》 奶奶 -》妈妈 -》外公 -》 外婆
// 中序遍历：爷爷-》爸爸-》奶奶 -》我 -》外公 -》妈妈 -》外婆
// 后序遍历：爷爷 -》奶奶 -》爸爸 -》外公 -》外婆 -》妈妈 -》我

const preOrder = root => {
  if (!root) return;
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
}

const inOrder = root => {
  if (!root) return;
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}
 
const nextOrder = root => {
  if (!root) return;
  nextOrder(root.left);
  nextOrder(root.right);
  console.log(root.value);
}

preOrder(root);
console.log('-----------');
inOrder(root);
console.log('-----------');
nextOrder(root);