class Solution {
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const indeg = new Array(numCourses).fill(0);
        for (const [a, b] of prerequisites) {
            adj[b].push(a);
            indeg[a]++;
        }
        const order = [];
        for (let i = 0; i < numCourses; i++) if (indeg[i] === 0) order.push(i);
        for (let h = 0; h < order.length; h++) {
            for (const v of adj[order[h]]) {
                if (--indeg[v] === 0) order.push(v);
            }
        }
        return order.length === numCourses ? order : [];
    }
}
var findOrder = function(numCourses, prerequisites) { return new Solution().findOrder(numCourses, prerequisites); };