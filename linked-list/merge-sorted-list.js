/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (left, right) {
  let merged = new ListNode();
  let merged_head = merged;
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      merged.next = left;
      left = left.next;
    } else {
      merged.next = right;
      right = right.next;
    }
    merged = merged.next;
  }
  if (left) {
    merged.next = left;
  }
  if (right) {
    merged.next = right;
  }
  return merged_head.next;
};
