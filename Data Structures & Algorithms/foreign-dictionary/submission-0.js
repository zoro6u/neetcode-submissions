class Solution {
    foreignDictionary(words) {
        const adj = new Map();
        for (const w of words) for (const c of w) if (!adj.has(c)) adj.set(c, new Set());
        const indeg = new Map();
        for (const c of adj.keys()) indeg.set(c, 0);
        for (let i = 0; i + 1 < words.length; i++) {
            const a = words[i], b = words[i + 1];
            if (a.length > b.length && a.startsWith(b)) return "";
            const m = Math.min(a.length, b.length);
            for (let j = 0; j < m; j++) {
                if (a[j] !== b[j]) {
                    if (!adj.get(a[j]).has(b[j])) {
                        adj.get(a[j]).add(b[j]);
                        indeg.set(b[j], indeg.get(b[j]) + 1);
                    }
                    break;
                }
            }
        }
        const queue = [];
        for (const [c, d] of indeg) if (d === 0) queue.push(c);
        const order = [];
        for (let h = 0; h < queue.length; h++) {
            const c = queue[h];
            order.push(c);
            for (const nxt of adj.get(c)) {
                indeg.set(nxt, indeg.get(nxt) - 1);
                if (indeg.get(nxt) === 0) queue.push(nxt);
            }
        }
        return order.length === adj.size ? order.join("") : "";
    }
}
var foreignDictionary = function(words) { return new Solution().foreignDictionary(words); };