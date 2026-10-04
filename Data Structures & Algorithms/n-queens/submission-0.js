class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result = [];
        const cols = new Set();
        const diag1 = new Set(); // r - c
        const diag2 = new Set(); // r + c
        const placement = [];

        const backtrack = (r) => {
            if (r === n) {
                const board = placement.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1));
                result.push(board);
                return;
            }
            for (let c = 0; c < n; c++) {
                if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;
                cols.add(c);
                diag1.add(r - c);
                diag2.add(r + c);
                placement.push(c);
                backtrack(r + 1);
                placement.pop();
                cols.delete(c);
                diag1.delete(r - c);
                diag2.delete(r + c);
            }
        };

        backtrack(0);
        return result;
    }
}