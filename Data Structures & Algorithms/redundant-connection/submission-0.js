class Solution {
    findRedundantConnection(edges) {
        const n = edges.length;
        const parent = Array.from({ length: n + 1 }, (_, i) => i);
        const find = (x) => {
            while (parent[x] !== x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };
        for (const [a, b] of edges) {
            const ra = find(a), rb = find(b);
            if (ra === rb) return [a, b];
            parent[ra] = rb;
        }
        return [];
    }
}
var findRedundantConnection = function(edges) { return new Solution().findRedundantConnection(edges); };