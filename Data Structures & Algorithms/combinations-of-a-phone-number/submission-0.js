class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];

        const mapping = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        };

        const result = [];
        const path = [];

        const backtrack = (idx) => {
            if (idx === digits.length) {
                result.push(path.join(''));
                return;
            }
            for (const letter of mapping[digits[idx]]) {
                path.push(letter);
                backtrack(idx + 1);
                path.pop();
            }
        };

        backtrack(0);
        return result;
    }
}