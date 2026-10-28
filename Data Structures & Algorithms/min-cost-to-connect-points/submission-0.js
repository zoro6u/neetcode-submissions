class Solution {
    minCostConnectPoints(points) {
        const n = points.length;
        const best = new Array(n).fill(Infinity);
        const used = new Array(n).fill(false);
        best[0] = 0;
        let total = 0;
        for (let step = 0; step < n; step++) {
            let u = -1;
            for (let i = 0; i < n; i++) {
                if (!used[i] && (u === -1 || best[i] < best[u])) u = i;
            }
            used[u] = true;
            total += best[u];
            const [ux, uy] = points[u];
            for (let v = 0; v < n; v++) {
                if (!used[v]) {
                    const d = Math.abs(ux - points[v][0]) + Math.abs(uy - points[v][1]);
                    if (d < best[v]) best[v] = d;
                }
            }
        }
        return total;
    }
}
var minCostConnectPoints = function(points) { return new Solution().minCostConnectPoints(points); };