class Solution {
    orangesRotting(grid) {
        const m = grid.length, n = grid[0].length;
        let queue = [], fresh = 0;
        for (let r = 0; r < m; r++)
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 2) queue.push([r, c]);
                else if (grid[r][c] === 1) fresh++;
            }
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let minutes = 0;
        while (queue.length && fresh) {
            const next = [];
            for (const [r, c] of queue) {
                for (const [dr, dc] of dirs) {
                    const nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
                        grid[nr][nc] = 2;
                        fresh--;
                        next.push([nr, nc]);
                    }
                }
            }
            queue = next;
            minutes++;
        }
        return fresh === 0 ? minutes : -1;
    }
}
var orangesRotting = function(grid) { return new Solution().orangesRotting(grid); };