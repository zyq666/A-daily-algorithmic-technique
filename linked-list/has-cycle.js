/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = (fast = head);
  let hasCycle = false;
  while (!hasCycle && fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    hasCycle = slow === fast;
  }
  return hasCycle;
};
