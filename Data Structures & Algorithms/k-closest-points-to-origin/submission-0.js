class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = [];
        const distSq = (p) => p[0] * p[0] + p[1] * p[1];

        const bubbleUp = (i) => {
            while (i > 0) {
                const parent = (i - 1) >> 1;
                if (distSq(heap[i]) > distSq(heap[parent])) {
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
                if (l < n && distSq(heap[l]) > distSq(heap[largest])) largest = l;
                if (r < n && distSq(heap[r]) > distSq(heap[largest])) largest = r;
                if (largest === i) break;
                [heap[i], heap[largest]] = [heap[largest], heap[i]];
                i = largest;
            }
        };
        const push = (p) => { heap.push(p); bubbleUp(heap.length - 1); };
        const pop = () => {
            const top = heap[0];
            const last = heap.pop();
            if (heap.length > 0) { heap[0] = last; bubbleDown(0); }
            return top;
        };

        for (const p of points) {
            push(p);
            if (heap.length > k) pop();
        }

        return heap;
    }
}