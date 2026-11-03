class Solution {
    swimInWater(grid) {
        const n = grid.length;
        const heap = [[grid[0][0], 0, 0]];       // [time, r, c]
        const push = (item) => {
            heap.push(item);
            let i = heap.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (heap[p][0] <= heap[i][0]) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };
        const pop = () => {
            const top = heap[0], last = heap.pop();
            if (heap.length) {
                heap[0] = last;
                let i = 0;
                for (;;) {
                    const l = 2 * i + 1, r = l + 1;
                    let m = i;
                    if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
                    if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
                    if (m === i) break;
                    [heap[m], heap[i]] = [heap[i], heap[m]];
                    i = m;
                }
            }
            return top;
        };
        const seen = Array.from({ length: n }, () => new Uint8Array(n));
        seen[0][0] = 1;
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        while (heap.length) {
            const [t, r, c] = pop();
            if (r === n - 1 && c === n - 1) return t;
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !seen[nr][nc]) {
                    seen[nr][nc] = 1;
                    push([Math.max(t, grid[nr][nc]), nr, nc]);
                }
            }
        }
        return -1;
    }
}
var swimInWater = function(grid) { return new Solution().swimInWater(grid); };