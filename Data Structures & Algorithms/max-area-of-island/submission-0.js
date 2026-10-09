class Solution {
    maxAreaOfIsland(grid) {
        const m = grid.length;
        if (!m) return 0;
        const n = grid[0].length;
        const seen = Array.from({ length: m }, () => new Uint8Array(n));
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let best = 0;
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] !== 1 || seen[r][c]) continue;
                seen[r][c] = 1;
                const stack = [[r, c]];
                let area = 0;
                while (stack.length) {
                    const [x, y] = stack.pop();
                    area++;
                    for (const [dx, dy] of dirs) {
                        const nx = x + dx, ny = y + dy;
                        if (nx >= 0 && nx < m && ny >= 0 && ny < n &&
                            grid[nx][ny] === 1 && !seen[nx][ny]) {
                            seen[nx][ny] = 1;
                            stack.push([nx, ny]);
                        }
                    }
                }
                if (area > best) best = area;
            }
        }
        return best;
    }
}
var maxAreaOfIsland = function(grid) { return new Solution().maxAreaOfIsland(grid); };