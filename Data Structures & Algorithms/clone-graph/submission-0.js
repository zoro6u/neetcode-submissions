class Solution {
    cloneGraph(node) {
        if (!node) return null;
        const copies = new Map([[node, new Node(node.val)]]);
        const queue = [node];
        for (let h = 0; h < queue.length; h++) {
            const cur = queue[h];
            for (const nb of cur.neighbors) {
                if (!copies.has(nb)) {
                    copies.set(nb, new Node(nb.val));
                    queue.push(nb);
                }
                copies.get(cur).neighbors.push(copies.get(nb));
            }
        }
        return copies.get(node);
    }
}
var cloneGraph = function(node) { return new Solution().cloneGraph(node); };