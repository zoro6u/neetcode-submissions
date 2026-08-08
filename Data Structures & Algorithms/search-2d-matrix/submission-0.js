class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length, n = matrix[0].length;
        let lo = 0, hi = m * n - 1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            const val = matrix[Math.floor(mid / n)][mid % n];
            if (val === target) return true;
            else if (val < target) lo = mid + 1;
            else hi = mid - 1;
        }
        return false;
    }
}

// LeetCode's JS harness expects a bare function — add this line to submit:
var searchMatrix = (matrix, target) => new Solution().searchMatrix(matrix, target);