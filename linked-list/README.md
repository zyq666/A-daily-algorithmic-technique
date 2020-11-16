### 链表

链表是指将一块零散的内存空间通过指针的串联形成的数据结构，通常链表中每个结点内会存放当前结点的数据和指向下一个结点地址的后继指针(next)。

#### 特点

**占用内存大**：链表中每个结点内除了存储数据，至少还存储了一个后继指针(next)，用来存放指向下一个结点的地址，因此链表占用的内存空间较大；

**访问速度慢**：由于链表是由一块不连续的内存空间形成的，无法像数组一样根据首地址和下标计算出对应的内存地址，因此链表不支持随机访问，想要访问链表中某个结点，必须从头结点依次遍历，时间复杂度为 O(n)；

**插入删除快**：同样的，结点的插入和删除无需移动其他结点的位置来保持内存空间的连续性，只要改变其前后结点的指向即可，因此链表的插入、删除操作速度很快。

双向链表中，对指定结点执行删除、插入操作的时间复杂度是 O(1); 但针对指定位置的双向链表结点执行删除、插入操作与单向链表一样，必须先遍历找到其前驱结点，因此这种情况下的删除、插入操作的时间复杂度是 O(n)；

---

[单向链表(one-way.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/one-ways.js)
单向链表中尾节点的后继指针(next)指向 null，访问/插入/删除结点的时间复杂度是 O(n)；

[单向循环链表(one-way-circle.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/one-ways-circle.js)
单向链表中尾节点的后继指针(next)指向链表的头结点；

[双向链表(double-ways.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/double-ways.js)
双向链表中每个结点内不仅存放了指向下一个结点的后继指针(next)，还存放了指向上一个结点的前驱指针(prev);
双向链表中头节点的前驱指针(prev)指向 null，尾节点的后继指针(next)指向 null；

[双向循环链表(double-ways-circle.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/double-ways-circle.js)
双向链表中头节点的前驱指针(prev)指向尾节点，尾节点的后继指针(next)指向头节点；

[判断是否为回文链表(plalindrome.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/linked-list/plalindrome.js)
使用双向链表实现，更好的实现方法：单向链表+快慢指针
