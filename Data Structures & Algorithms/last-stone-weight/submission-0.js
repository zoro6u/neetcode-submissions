class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = [...stones]; // max-heap via array, largest at root

        const bubbleUp = (i) => {
            while (i > 0) {
                const parent = (i - 1) >> 1;
                if (heap[i] > heap[parent]) {
                    [heap[i], heap[parent]] = [heap[parent], heap[i]];
                    i = parent;
                } else break;
            }
        };
        const bubbleDown = (i) => {
            const n = heap.length;
            while (true) {
                let largest = i;
                const l = 2 * i + 1, r = 2 * i + 2;
                if (l < n && heap[l] > heap[largest]) largest = l;
                if (r < n && heap[r] > heap[largest]) largest = r;
                if (largest === i) break;
                [heap[i], heap[largest]] = [heap[largest], heap[i]];
                i = largest;
            }
        };
        const push = (val) => { heap.push(val); bubbleUp(heap.length - 1); };
        const pop = () => {
            const top = heap[0];
            const last = heap.pop();
            if (heap.length > 0) { heap[0] = last; bubbleDown(0); }
            return top;
        };

        for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) bubbleDown(i);

        while (heap.length > 1) {
            const y = pop();
            const x = pop();
            if (y !== x) push(y - x);
        }

        return heap.length > 0 ? heap[0] : 0;
    }
}