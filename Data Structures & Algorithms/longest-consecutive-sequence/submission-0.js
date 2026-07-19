class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (const x of numSet) {
            if (!numSet.has(x - 1)) {  // only start counting from sequence starts
                let length = 1;
                while (numSet.has(x + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}