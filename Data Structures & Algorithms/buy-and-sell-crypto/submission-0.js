class Solution {
    maxProfit(prices) {
        let minPrice = Infinity;
        let profit = 0;
        for (const p of prices) {
            minPrice = Math.min(minPrice, p);
            profit = Math.max(profit, p - minPrice);
        }
        return profit;
    }
}