class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const result = new Array(n).fill(0);   // default 0 = never gets warmer
        const stack = [];                      // indices, temps non-increasing

        for (let i = 0; i < n; i++) {
            // '<' not '<=': an equal temperature is not warmer
            while (stack.length > 0 &&
                   temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const j = stack.pop();
                result[j] = i - j;
            }
            stack.push(i);
        }

        return result;
    }
}