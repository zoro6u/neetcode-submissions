class Solution {
    islandsAndTreasure(grid) {
        const m = grid.length;
        if (!m || !grid[0].length) return;
        const n = grid[0].length;
        const INF = 2147483647;
        const queue = [];
        for (let r = 0; r < m; r++)
            for (let c = 0; c < n; c++)
                if (grid[r][c] === 0) queue.push([r, c]);
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let h = 0; h < queue.length; h++) {
            const [r, c] = queue[h];
            const d = grid[r][c] + 1;
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === INF) {
                    grid[nr][nc] = d;
                    queue.push([nr, nc]);
                }
            }
        }
    }
}
var islandsAndTreasure = function(grid) { new Solution().islandsAndTreasure(grid); };
