class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum(nums, target) {
        const sorted = [...nums].sort((a, b) => a - b);
        const result = [];
        const path = [];

        const backtrack = (start, remaining) => {
            if (remaining === 0) {
                result.push([...path]);
                return;
            }
            for (let i = start; i < sorted.length; i++) {
                if (sorted[i] > remaining) break;
                path.push(sorted[i]);
                backtrack(i, remaining - sorted[i]);
                path.pop();
            }
        };

        backtrack(0, target);
        return result;
    }
}