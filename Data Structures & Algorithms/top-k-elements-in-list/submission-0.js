class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const n = nums.length;
        const count = new Map();
        for (const x of nums) {
            count.set(x, (count.get(x) || 0) + 1);
        }

        const buckets = Array.from({ length: n + 1 }, () => []);
        for (const [value, freq] of count.entries()) {
            buckets[freq].push(value);
        }

        const result = [];
        for (let freq = n; freq >= 1 && result.length < k; freq--) {
            for (const value of buckets[freq]) {
                result.push(value);
                if (result.length === k) break;
            }
        }

        return result;
    }
}

module.exports = Solution;