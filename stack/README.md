## 栈

栈是一种只允许在一端插入或删除数据的线性数据结构。

---

### 特点

**后进先出、先进后出**：由于栈只允许在一端插入或删除数据，因此先插入的数据会被压入栈底，最后插入的数据在栈顶，删除时也只能从栈顶开始依次删除。

**ps**：函数栈中局部变量的共享、四则运算的解析都是通过栈来实现的，栈的插入/删除操作的时间复杂度都是 O(1)。

---

### 实现

[顺序栈(stack-by-array.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/stack/stack-by-array.js)</br>
使用数组实现栈数据结构，被称为顺序栈。

[链式栈(stack-by-linked.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/stack/stack-by-linked.js)</br>
使用链表实现栈数据结构，被称为链式栈。

---

### 应用

[判断是否是有效的括号(valid-parentheses.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/stack/valid-parentheses.js)</br>
**解题思路**：遍历字符串，遇到左括号将左括号压入栈底，遇到右括号，将右括号与栈顶的左括号匹配，如果匹配成功则将栈顶的左括号删除，再继续下次循环，最终栈被清空则表示字符串为有效的括号。
**时间复杂度**: O(1n)
本题源自[leetcode#20.有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

[最小栈(min-stack.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/stack/min-stack.js)</br>
**解题思路**：维护一个辅助栈，每次插入时将新值与辅助栈中栈顶的值比较，如果新值较小，则将新值插入至辅助栈中，删除时，如果栈顶的值与辅助栈栈顶的值相同，则将两栈的栈顶值同时删除。
**时间复杂度**: O(1n)
本题源自[leetcode#155.最小栈](https://leetcode-cn.com/problems/min-stack/)

[比较含退格的字符串(backspace-compare.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/stack/backspace-compare.js)
**解题思路**：定义两个栈，并遍历字符串，遇到正常字符将字符分别压入 left\right 栈中，遇到#号就将对应栈中的栈顶弹出，最终得到退格后的栈，对比栈中的字符串即可。
**时间复杂度**：O(1n)
本题源自[leetcode#844.比较含退格的字符串](https://leetcode-cn.com/problems/min-stack/)

[棒球比赛(baseball-game.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/stack/baseball-game.js)
**解题思路**：遍历数组，根据题目规则算出分数，累加得到结果。
**时间复杂度**：O(1n)
本题源自[leetcode#682.棒球比赛](https://leetcode-cn.com/problems/baseball-game/)
