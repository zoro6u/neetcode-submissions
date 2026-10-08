class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (grid.length === 0) return 0;
        const rows = grid.length, cols = grid[0].length;
        const seen = new Uint8Array(rows * cols);
        let count = 0;

        for (let start = 0; start < rows * cols; start++) {
            const r0 = Math.floor(start / cols), c0 = start % cols;
            if (grid[r0][c0] !== '1' || seen[start]) continue;
            count++;
            seen[start] = 1;
            const stack = [start];
            while (stack.length > 0) {
                const cur = stack.pop();
                const r = Math.floor(cur / cols), c = cur % cols;
                if (r > 0 && grid[r - 1][c] === '1' && !seen[cur - cols]) { seen[cur - cols] = 1; stack.push(cur - cols); }
                if (r < rows - 1 && grid[r + 1][c] === '1' && !seen[cur + cols]) { seen[cur + cols] = 1; stack.push(cur + cols); }
                if (c > 0 && grid[r][c - 1] === '1' && !seen[cur - 1]) { seen[cur - 1] = 1; stack.push(cur - 1); }
                if (c < cols - 1 && grid[r][c + 1] === '1' && !seen[cur + 1]) { seen[cur + 1] = 1; stack.push(cur + 1); }
            }
        }
        return count;
    }
}