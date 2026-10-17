class Solution {
    solve(board) {
        const m = board.length;
        if (!m || !board[0].length) return;
        const n = board[0].length;
        const queue = [];
        for (let r = 0; r < m; r++)
            for (let c = 0; c < n; c++)
                if ((r === 0 || r === m - 1 || c === 0 || c === n - 1) && board[r][c] === 'O') {
                    board[r][c] = 'S';
                    queue.push([r, c]);
                }
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let h = 0; h < queue.length; h++) {
            const [r, c] = queue[h];
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'O') {
                    board[nr][nc] = 'S';
                    queue.push([nr, nc]);
                }
            }
        }
        for (let r = 0; r < m; r++)
            for (let c = 0; c < n; c++) {
                if (board[r][c] === 'O') board[r][c] = 'X';
                else if (board[r][c] === 'S') board[r][c] = 'O';
            }
    }
}
var solve = function(board) { new Solution().solve(board); };