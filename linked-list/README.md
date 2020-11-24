## 链表

链表是指将一块零散的内存空间通过指针的串联形成的数据结构，通常链表中每个结点内会存放当前结点的数据和指向下一个结点地址的后继指针(next)。

---

### 特点

**占用内存大**：链表中每个结点内除了存储数据，至少还存储了一个后继指针(next)，用来存放指向下一个结点的地址，因此链表占用的内存空间较大；

**访问速度慢**：由于链表是由一块不连续的内存空间形成的，无法像数组一样根据首地址和下标计算出对应的内存地址，因此链表不支持随机访问，想要访问链表中某个结点，必须从头结点依次遍历，时间复杂度为 O(n)；

**插入删除快**：同样的，结点的插入和删除无需移动其他结点的位置来保持内存空间的连续性，只要改变其前后结点的指向即可，因此链表的插入、删除操作速度很快。

**ps**：双向链表中，对指定结点执行删除、插入操作的时间复杂度是 O(1); 但针对指定位置的双向链表结点执行删除、插入操作与单向链表一样，必须先遍历找到其前驱结点，因此这种情况下的删除、插入操作的时间复杂度是 O(n)；

---

### 实现

[单向链表(one-way.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/one-ways.js)</br>
单向链表中尾节点的后继指针(next)指向 null，访问/插入/删除结点的时间复杂度是 O(n)；

[单向循环链表(one-way-circle.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/one-ways-circle.js)</br>
单向链表中尾节点的后继指针(next)指向链表的头结点；

[双向链表(double-ways.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/double-ways.js)</br>
双向链表中每个结点内不仅存放了指向下一个结点的后继指针(next)，还存放了指向上一个结点的前驱指针(prev);
双向链表中头节点的前驱指针(prev)指向 null，尾节点的后继指针(next)指向 null；

[双向循环链表(double-ways-circle.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/double-ways-circle.js)</br>
双向链表中头节点的前驱指针(prev)指向尾节点，尾节点的后继指针(next)指向头节点；

---

### 应用

[判断是否为回文链表(plalindrome.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/plalindrome.js)</br>
**解题思路**：用双向链表实现，更好的实现方法：单向链表+快慢指针
**时间复杂度**: O(3n)

[反转链表(reverse-linked-list.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/reverse-linked-list.js)</br>
**解题思路**：定义两个指针: pre, cur, 分别指向 null 和 head 结点，每次循环时将 cur 结点的后继指针指向 pre 结点以达到反转指针的目的，时间复杂度为 O(n)，图解如下：</br>
![快慢指针](https://pic.leetcode-cn.com/7d8712af4fbb870537607b1dd95d66c248eb178db4319919c32d9304ee85b602-%E8%BF%AD%E4%BB%A3.gif)</br>
**时间复杂度**: O(1n)
本题及思路源自[leetcode#206.反转链表](https://leetcode-cn.com/problems/reverse-linked-list/solution/dong-hua-yan-shi-206-fan-zhuan-lian-biao-by-user74/)</br>

[判断链表中是否有环(has-cycle.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/has-cycle.js)</br>
**解题思路**：快慢指针，定义两个指针 slow,fast 指向 head, 在循环中慢指针每次走一步(slow = slow.next)，快指针每次走两步(fast = fast.next.next);如果链表中有环，在循环中快慢指针必定会相遇，即判断两个指针是否会相等（fast === slow)。
**时间复杂度**: O(1n)
本题源自[leetcode#141.环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)</br>

[合并两个有序链表(merge-sorted-list.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/merge-sorted-list.js)</br>
**解题思路**：循环时将两个链表的头结点进行对比，每次将值较小的一方插入新链表中，并移动指针至下一个结点，直至某一方为 null; 当两个链表的长度不等时，需注意处理循环后剩下的结点。
**时间复杂度**: O(1n)
本题源自[leetcode#21.合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/javascript-he-bing-liang-ge-you-xu-de-lian-biao-by/)

[删除链表中倒数第 N 个结点(delete-node.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/delete-node.js)</br>
**解题思路**：快慢指针，定义一个 fast 指针指向 head 的第 N 个后继结点(fast.next.next....next),定义 slow 指针指向 head 结点，循环中快慢指针各走一步，当 fast 指针走到最后一步(fast.next === null)时，slow 指针刚好指向链表的第 N-1 个结点，将 slow.next = slow.next.next，即可删除第 N 个结点。
**时间复杂度**: O(1n)
本题源自[leetcode#19.删除链表中倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

[链表的中间结点(find-center-node.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/find-center-node.js)</br>
**解题思路**：快慢指针，定义 fast、slow 指针都指向 head，在循环中，slow 指针每次走一步，fast 指针每次走两步，当 fast 指针走到尾结点(fast.next === null)时，slow 指针正好指向链表的中间结点。
**时间复杂度**: O(1n)
本题源自[leetcode#876.链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)
