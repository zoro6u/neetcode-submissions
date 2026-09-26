class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const sorted = [...nums].sort((a, b) => a - b);
        const n = sorted.length;
        const result = [];
        const path = [];

        const backtrack = (start) => {
            result.push([...path]);
            for (let i = start; i < n; i++) {
                if (i > start && sorted[i] === sorted[i - 1]) continue;
                path.push(sorted[i]);
                backtrack(i + 1);
                path.pop();
            }
        };

        backtrack(0);
        return result;
    }
}