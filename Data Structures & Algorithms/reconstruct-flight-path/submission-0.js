class Solution {
    findItinerary(tickets) {
        const adj = new Map();
        for (const [a, b] of tickets) {
            if (!adj.has(a)) adj.set(a, []);
            adj.get(a).push(b);
        }
        for (const list of adj.values()) {
            list.sort((x, y) => (x < y ? 1 : x > y ? -1 : 0));   // smallest at the end
        }
        const stack = ["JFK"];
        const route = [];
        while (stack.length) {
            const u = stack[stack.length - 1];
            const list = adj.get(u);
            if (list && list.length) stack.push(list.pop());
            else route.push(stack.pop());
        }
        return route.reverse();
    }
}
var findItinerary = function(tickets) { return new Solution().findItinerary(tickets); };
