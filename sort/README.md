## 排序

将数组按照某种规则排序。

---

### 实现

[冒泡排序(bubbling-sort.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/bubbling-sort.js)</br>
每次循环将相邻元素按规则调换位置，直到循环结束。
**时间复杂度**: O(n^2)</br>
**空间复杂度**: O(1)</br>
**具有稳定性**: ✅</br>

[选择排序(select-sort.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/select-sort.js)</br>
将数组分为已排序和未排序区，每次循环找出未排序区中的最小值，放到已排序区的末尾，直到循环结束。
**时间复杂度**: O(n^2)</br>
**空间复杂度**: O(1)</br>
**具有稳定性**: ❌</br>

[插入排序(insert-sort.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/insert-sort.js)</br>
将数组分为已排序和未排序区，每次循环将未排序区的元素与已排序区的元素对比，按照规则将未排序中的首元素插入至已排序区中的合适位置，直至循环结束。
**时间复杂度**: O(n^2)</br>
**空间复杂度**: O(1)</br>
**具有稳定性**: ✅</br>

[归并排序(merge-sort.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/merge-sort.js)</br>
采用分治思想，将数组拆分成最小粒度(2)，按照规则排序后，再将拆分排序后的数组合并。
**缺点**：不是原地排序方法，但是在任何情况下时间复杂度都是O(nlogn)
**时间复杂度**: O(nlogn)</br>
**空间复杂度**: O(n)</br>
**具有稳定性**: ✅</br>

[快速排序(quick-sort.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/quick-sort.js)</br>
采用分治思想，随机取一个基准数，并将数组拆分，小于基准数的放在基准数左边，大于基准数的放在基准数右边，再从基准数两边的数组中分别随机取出一个基准数...直至数组拆分成最小粒度(1)。
**特点**: 在最坏情况下，时间复杂度是O(n^2)
**时间复杂度**: O(nlogn)</br>
**空间复杂度**: O(1)</br>
**具有稳定性**: ✅</br>

[桶排序(burcket-sort.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/burcket-sort.js)
桶排序是线性排序方式的一种；定义N个有序的桶，遍历数组，将数据插入至符合条件的桶中，再对每个桶中的数据进行快排，最后遍历桶，将每个桶的数据合并。
**特点**: 桶排序通常不涉及数值比较，对数据的要求高，桶必须是有序的。
**时间复杂度**: O(n)</br>
**空间复杂度**: O(n)</br>

[计数排序(counting-sort.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/counting-sort.js)
计数排序是桶排序的一种，遍历数组将元素出现的次数存放在桶中并按位累加得到当前元素的排名，最终再次遍历数组，按照桶中的排名将正确的元素赋值给结果。
**时间复杂度**: O(n)</br>
**空间复杂度**: O(n)</br>

### 应用
[O(n) 时间复杂度内求无序数组中的第 K 大元素(kth-largest-element-in-an-array.js)]

[前 K 个高频元素(top-k-frequent-elements.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/top-k-frequent-elements.js)</br>
**解题思路**：利用桶排序，将每个元素出现的次数分别放入桶中，最后再合并</br>
**时间复杂度**: O(n)</br>
本题源自[leetcode#347.前K个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)</br>

[最小K个数(smallest-k-lcci.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/smallest-k-lcci.js)</br>
**解题思路**：先排序，再返回前K个</br>
**时间复杂度**: O(nlogn)</br>
本题源自[leetcode#14.最小K个数](https://leetcode-cn.com/problems/smallest-k-lcci/)</br>

[合并区间(merge-intervals.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/merge-intervals.js)</br>
**解题思路**：先排序，再合并区间</br>
**时间复杂度**: O(nlogn)</br>
本题源自[leetcode#56.合并区间](https://leetcode-cn.com/problems/merge-intervals/)</br>

[插入区间(insert-interval.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/insert-interval.js)</br>
**解题思路**：先排序，再合并区间</br>
**时间复杂度**: O(nlogn)</br>
本题源自[leetcode#57.插入区间](https://leetcode-cn.com/problems/insert-interval/)</br>

[数组中的逆序对(reverse-pairs.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/reverse-pairs.js)</br>
**解题思路**：利用归并排序</br>
**时间复杂度**: O(nlogn)</br>
本题源自[leetcode#剑指Offer51.数组中的逆序对](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)</br>

[数组的相对排序(relative-sort-array.js)](https://github.com/zyq666/A-daily-algorithmic-technique/blob/master/sort/relative-sort-array.js)</br>
**解题思路**：利用桶排序</br>
**时间复杂度**: O(nlogn)</br>
本题源自[leetcode#1122.数组的相对排序](https://leetcode-cn.com/problems/relative-sort-array/)</br>