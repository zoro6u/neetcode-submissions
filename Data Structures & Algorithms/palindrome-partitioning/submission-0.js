class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const n = s.length;
        const result = [];
        const path = [];

        const isPalindrome = (i, j) => {
            let lo = i, hi = j - 1;
            while (lo < hi) {
                if (s[lo] !== s[hi]) return false;
                lo++;
                hi--;
            }
            return true;
        };

        const backtrack = (start) => {
            if (start === n) {
                result.push([...path]);
                return;
            }
            for (let end = start + 1; end <= n; end++) {
                if (isPalindrome(start, end)) {
                    path.push(s.slice(start, end));
                    backtrack(end);
                    path.pop();
                }
            }
        };

        backtrack(0);
        return result;
    }
}