class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Array(26).fill(0);
        let left = 0, maxCount = 0, best = 0;

        for (let right = 0; right < s.length; right++) {
            const idx = s.charCodeAt(right) - 65; // 'A' = 65
            count[idx]++;
            maxCount = Math.max(maxCount, count[idx]);

            // replacements needed = window size - most frequent char count
            if ((right - left + 1) - maxCount > k) {
                count[s.charCodeAt(left) - 65]--;
                left++;
            }

            best = Math.max(best, right - left + 1);
        }

        return best;
    }
}