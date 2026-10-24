class Solution {
    networkDelayTime(times, n, k) {
        const adj = Array.from({ length: n + 1 }, () => []);
        for (const [u, v, w] of times) adj[u].push([v, w]);
        const dist = new Array(n + 1).fill(Infinity);
        dist[k] = 0;
        // binary min-heap of [distance, node]
        const heap = [[0, k]];
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
                    let l = 2 * i + 1, r = l + 1, m = i;
                    if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
                    if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
                    if (m === i) break;
                    [heap[m], heap[i]] = [heap[i], heap[m]];
                    i = m;
                }
            }
            return top;
        };
        while (heap.length) {
            const [d, u] = pop();
            if (d > dist[u]) continue;
            for (const [v, w] of adj[u]) {
                const nd = d + w;
                if (nd < dist[v]) {
                    dist[v] = nd;
                    push([nd, v]);
                }
            }
        }
        let ans = 0;
        for (let i = 1; i <= n; i++) ans = Math.max(ans, dist[i]);
        return ans === Infinity ? -1 : ans;
    }
}
var networkDelayTime = function(times, n, k) { return new Solution().networkDelayTime(times, n, k); };