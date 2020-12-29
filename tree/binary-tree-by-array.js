//              我
//   爸爸                  妈妈
//爷爷   奶奶            外公   外婆

// 前序遍历：我 -》爸爸 -》爷爷 -》 奶奶 -》妈妈 -》外公 -》 外婆
// 中序遍历：爷爷-》爸爸-》奶奶 -》我 -》外公 -》妈妈 -》外婆
// 后序遍历：爷爷 -》奶奶 -》爸爸 -》外公 -》外婆 -》妈妈 -》我

function preOrder(i, tree) {
  if (i >= tree.length) {
    return
  }
  console.log(tree[i])
  preOrder(i * 2, tree)
  preOrder(i * 2 + 1, tree)
}

function inOrder(i, tree) {
  if (i >= tree.length) {
    return
  }
  inOrder(i * 2, tree)
  console.log(tree[i])
  inOrder(i * 2 + 1, tree)
}

function nextOrder(i, tree) {
  if (i >= tree.length) {
    return
  }
  nextOrder(i * 2, tree)
  nextOrder(i * 2 + 1, tree)
  console.log(tree[i])
}

preOrder(1, ['', '我', '爸爸', '妈妈', '爷爷', '奶奶', '外公', '外婆'])
console.log('-----------')
inOrder(1, ['', '我', '爸爸', '妈妈', '爷爷', '奶奶', '外公', '外婆'])
console.log('-----------')
nextOrder(1, ['', '我', '爸爸', '妈妈', '爷爷', '奶奶', '外公', '外婆'])
