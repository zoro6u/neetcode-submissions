class Solution {
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const indeg = new Array(numCourses).fill(0);
        for (const [a, b] of prerequisites) {
            adj[b].push(a);
            indeg[a]++;
        }
        const queue = [];
        for (let i = 0; i < numCourses; i++) if (indeg[i] === 0) queue.push(i);
        let taken = 0;
        for (let h = 0; h < queue.length; h++) {
            const u = queue[h];
            taken++;
            for (const v of adj[u]) {
                if (--indeg[v] === 0) queue.push(v);
            }
        }
        return taken === numCourses;
    }
}
var canFinish = function(numCourses, prerequisites) { return new Solution().canFinish(numCourses, prerequisites); };