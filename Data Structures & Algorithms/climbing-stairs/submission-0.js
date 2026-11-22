class Solution {
    climbStairs(n) {
        let a = 1, b = 1;
        for (let i = 0; i < n - 1; i++) [a, b] = [b, a + b];
        return b;
    }
}
var climbStairs = function(n) { return new Solution().climbStairs(n); };
