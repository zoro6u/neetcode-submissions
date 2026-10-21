class Solution {
    countComponents(n, edges) {
        const parent = Array.from({ length: n }, (_, i) => i);
        const find = (x) => {
            while (parent[x] !== x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };
        let components = n;
        for (const [a, b] of edges) {
            const ra = find(a), rb = find(b);
            if (ra !== rb) {
                parent[ra] = rb;
                components--;
            }
        }
        return components;
    }
}
var countComponents = function(n, edges) { return new Solution().countComponents(n, edges); };