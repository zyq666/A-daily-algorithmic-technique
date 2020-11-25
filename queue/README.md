## 队列

队列是一种只能在一端入队、另一端出队的线性队列。

---

### 特点

**先进先出**：先进入队列中的数据，会达到队列底部，出列时会直接从队列底部取，因此队列的入队/出队顺序是先进先出。

---

### 实现

[顺序队列(queue-by-array.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/queue/queue-by-array.js)</br>
使用数组实现队列数据结构，被称为顺序队列。

[链式队列(queue-by-linked.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/queue/queue-by-linked.js)</br>
使用链表实现队列数据结构，被称为链式队列。

---

### 应用

[设计循环队列(design-circular-queue.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/queue/design-circular-queue.js)</br>
**解题思路**：循环队列的特点：循环队列是一个定长的队列，队满后需有数据出队才可以继续出队，后续入队时，队列的 tail 结点会从 0 开始累加，直到队列占满为止，循环队列中入队/出队的时间复杂度都是 O(1)</br>
**时间复杂度**: O(1n)</br>
本题源自[leetcode#622.设计循环队列](https://leetcode-cn.com/problems/design-circular-queue/)</br>

[最近的请求次数(number-of-recent-calls.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/queue//number-of-recent-calls.js)</br>
**解题思路**：每次调用 ping 方法时，将传入的 time - 3000 与队头的值进行对比，如果大于队头的值，将 time 入队，否则调用出队方法，并递归。</br>
**时间复杂度**: O(1n)</br>
本题源自[leetcode#933.最近的请求次数](https://leetcode-cn.com/problems/number-of-recent-calls/)</br>
