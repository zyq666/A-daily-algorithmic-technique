/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var getFast = function (head, n) {
  for (let i = 0; i < n; i++) {
    head = head.next;
  }
  return head;
};
var removeNthFromEnd = function (head, n) {
  const cloneHead = head;
  let slow = head;
  let fast = head;
  fast = getFast(fast, n);

  if (!fast) return slow.next;
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return cloneHead;
};
