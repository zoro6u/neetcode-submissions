class Solution {
    pacificAtlantic(heights) {
        const m = heights.length, n = heights[0].length;
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const reach = (starts) => {
            const seen = Array.from({ length: m }, () => new Uint8Array(n));
            const queue = [];
            for (const [r, c] of starts) {
                if (!seen[r][c]) { seen[r][c] = 1; queue.push([r, c]); }
            }
            for (let h = 0; h < queue.length; h++) {
                const [r, c] = queue[h];
                for (const [dr, dc] of dirs) {
                    const nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && !seen[nr][nc] &&
                        heights[nr][nc] >= heights[r][c]) {
                        seen[nr][nc] = 1;
                        queue.push([nr, nc]);
                    }
                }
            }
            return seen;
        };
        const pacS = [], atlS = [];
        for (let c = 0; c < n; c++) { pacS.push([0, c]); atlS.push([m - 1, c]); }
        for (let r = 0; r < m; r++) { pacS.push([r, 0]); atlS.push([r, n - 1]); }
        const pac = reach(pacS), atl = reach(atlS);
        const res = [];
        for (let r = 0; r < m; r++)
            for (let c = 0; c < n; c++)
                if (pac[r][c] && atl[r][c]) res.push([r, c]);
        return res;
    }
}
var pacificAtlantic = function(heights) { return new Solution().pacificAtlantic(heights); };