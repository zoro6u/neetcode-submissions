class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const lastSeen = new Map(); // char -> last index it appeared at
        let left = 0, best = 0;

        for (let right = 0; right < s.length; right++) {
            const c = s[right];
            // If c is inside the current window, shrink from the left.
            if (lastSeen.has(c) && lastSeen.get(c) >= left) {
                left = lastSeen.get(c) + 1;
            }
            lastSeen.set(c, right);
            best = Math.max(best, right - left + 1);
        }
        return best;
    }
}