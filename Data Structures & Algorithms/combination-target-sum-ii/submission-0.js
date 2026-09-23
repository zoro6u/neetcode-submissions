class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const sorted = [...candidates].sort((a, b) => a - b);
        const n = sorted.length;
        const result = [];
        const path = [];

        const backtrack = (start, remaining) => {
            if (remaining === 0) {
                result.push([...path]);
                return;
            }
            for (let i = start; i < n; i++) {
                if (sorted[i] > remaining) break;
                if (i > start && sorted[i] === sorted[i - 1]) continue;
                path.push(sorted[i]);
                backtrack(i + 1, remaining - sorted[i]);
                path.pop();
            }
        };

        backtrack(0, target);
        return result;
    }
}