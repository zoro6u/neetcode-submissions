class Solution {
    findCheapestPrice(n, flights, src, dst, k) {
        let dist = new Array(n).fill(Infinity);
        dist[src] = 0;
        for (let i = 0; i <= k; i++) {
            const nxt = dist.slice();
            for (const [u, v, w] of flights) {
                if (dist[u] + w < nxt[v]) nxt[v] = dist[u] + w;
            }
            dist = nxt;
        }
        return dist[dst] === Infinity ? -1 : dist[dst];
    }
}
var findCheapestPrice = function(n, flights, src, dst, k) { return new Solution().findCheapestPrice(n, flights, src, dst, k); };