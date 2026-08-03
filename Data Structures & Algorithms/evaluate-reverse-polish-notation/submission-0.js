class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const ops = new Map([
            ['+', (a, b) => a + b],
            ['-', (a, b) => a - b],
            ['*', (a, b) => a * b],
            ['/', (a, b) => Math.trunc(a / b)],   // truncate toward zero, not floor
        ]);

        for (const token of tokens) {
            if (ops.has(token)) {                 // exact match, so "-11" stays a number
                const b = stack.pop();            // right operand pops FIRST
                const a = stack.pop();            // left operand
                stack.push(ops.get(token)(a, b));
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}