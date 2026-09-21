class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [[]];
        for (const num of nums) {
            const withNum = result.map(subset => [...subset, num]);
            result = result.concat(withNum);
        }
        return result;
    }
}