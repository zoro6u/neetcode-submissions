from collections import Counter
import heapq

class Solution:
    def leastInterval(self, tasks, n):
        count = Counter(tasks)

        # Max Heap باستخدام قيم سالبة
        heap = [-freq for freq in count.values()]
        heapq.heapify(heap)

        time = 0

        while heap:
            temp = []
            cycle = n + 1

            while cycle > 0 and heap:
                freq = -heapq.heappop(heap)
                freq -= 1

                if freq > 0:
                    temp.append(-freq)

                time += 1
                cycle -= 1

            # نرجع المهام المتبقية للـ heap
            for freq in temp:
                heapq.heappush(heap, freq)

            # لو لسه في مهام، نضيف idle
            if heap:
                time += cycle

        return time