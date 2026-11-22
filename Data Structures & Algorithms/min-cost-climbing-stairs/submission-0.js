class Solution {
    minCostClimbingStairs(cost) {
        let a = 0, b = 0;
        for (let i = 2; i <= cost.length; i++) {
            [a, b] = [b, Math.min(b + cost[i - 1], a + cost[i - 2])];
        }
        return b;
    }
}
var minCostClimbingStairs = function(cost) { return new Solution().minCostClimbingStairs(cost); };