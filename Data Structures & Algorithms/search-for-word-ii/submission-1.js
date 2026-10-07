class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const rows = board.length, cols = board[0].length;
        const n = rows * cols;
        const flat = [];
        for (const row of board) for (const ch of row) flat.push(ch);

        const cnt = new Map();
        for (const ch of flat) cnt.set(ch, (cnt.get(ch) || 0) + 1);

        // trie as nested Maps; the number key 0 holds the words ending at a node
        const root = new Map();
        for (const w of words) {
            if (w.length > n) continue;
            let fits = true;
            for (const ch of w) {
                if (!cnt.has(ch)) { fits = false; break; }
            }
            if (!fits) continue;

            const key = cnt.get(w[0]) > cnt.get(w[w.length - 1]) ? [...w].reverse() : w;
            let node = root;
            for (const ch of key) {
                let nxt = node.get(ch);
                if (nxt === undefined) {
                    nxt = new Map();
                    node.set(ch, nxt);
                }
                node = nxt;
            }
            const bucket = node.get(0);
            if (bucket === undefined) node.set(0, [w]);
            else if (!bucket.includes(w)) bucket.push(w);
        }

        const nbrs = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const lst = [];
                if (r > 0) lst.push((r - 1) * cols + c);
                if (r < rows - 1) lst.push((r + 1) * cols + c);
                if (c > 0) lst.push(r * cols + c - 1);
                if (c < cols - 1) lst.push(r * cols + c + 1);
                nbrs.push(lst);
            }
        }

        const result = [];

        const dfs = (i, parent) => {
            const ch = flat[i];
            const node = parent.get(ch);
            const bucket = node.get(0);
            if (bucket !== undefined) {
                for (const w of bucket) result.push(w);
                node.delete(0);
            }
            flat[i] = '#';
            for (const j of nbrs[i]) {
                if (node.has(flat[j])) dfs(j, node);
            }
            flat[i] = ch;
            if (node.size === 0) parent.delete(ch);
        };

        for (let i = 0; i < n; i++) {
            if (root.has(flat[i])) dfs(i, root);
        }

        return result;
    }
}