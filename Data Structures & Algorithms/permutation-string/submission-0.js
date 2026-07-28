class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n = s1.length, m = s2.length;
        if (n > m) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0);

        for (let i = 0; i < n; i++) {
            s1Count[s1.charCodeAt(i) - aCode]++;
            s2Count[s2.charCodeAt(i) - aCode]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) matches++;
        }

        let left = 0;
        for (let right = n; right < m; right++) {
            if (matches === 26) return true;

            const rIdx = s2.charCodeAt(right) - aCode;
            s2Count[rIdx]++;
            if (s2Count[rIdx] === s1Count[rIdx]) matches++;
            else if (s2Count[rIdx] === s1Count[rIdx] + 1) matches--;

            const lIdx = s2.charCodeAt(left) - aCode;
            s2Count[lIdx]--;
            if (s2Count[lIdx] === s1Count[lIdx]) matches++;
            else if (s2Count[lIdx] === s1Count[lIdx] - 1) matches--;

            left++;
        }

        return matches === 26;
    }
}

module.exports = Solution;