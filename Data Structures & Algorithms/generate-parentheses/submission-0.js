class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        const path = [];

        const backtrack = (openCount, closeCount) => {
            if (path.length === 2 * n) {
                result.push(path.join(''));
                return;
            }
            if (openCount < n) {
                path.push('(');
                backtrack(openCount + 1, closeCount);
                path.pop();
            }
            if (closeCount < openCount) {
                path.push(')');
                backtrack(openCount, closeCount + 1);
                path.pop();
            }
        };

        backtrack(0, 0);
        return result;
    }
}