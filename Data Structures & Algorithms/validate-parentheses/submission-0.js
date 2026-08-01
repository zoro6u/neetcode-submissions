class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = { ')': '(', '}': '{', ']': '[' };

        for (const ch of s) {
            if (ch in pairs) { // closing bracket
                if (stack.length === 0 || stack[stack.length - 1] !== pairs[ch]) {
                    return false;
                }
                stack.pop();
            } else { // opening bracket
                stack.push(ch);
            }
        }

        return stack.length === 0; // valid only if all opens were matched
    }
}