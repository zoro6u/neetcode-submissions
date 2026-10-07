class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = null;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode();
        for (const w of words) {
            let node = root;
            for (const ch of w) {
                if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
                node = node.children.get(ch);
            }
            node.word = w;
        }

        const rows = board.length, cols = board[0].length;
        const result = [];
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        const dfs = (r, c, parent) => {
            const ch = board[r][c];
            const node = parent.children.get(ch);

            if (node.word !== null) {
                result.push(node.word);
                node.word = null;
            }

            board[r][c] = '#';
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && node.children.has(board[nr][nc])) {
                    dfs(nr, nc, node);
                }
            }
            board[r][c] = ch;

            if (node.children.size === 0 && node.word === null) {
                parent.children.delete(ch);
            }
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (root.children.has(board[r][c])) dfs(r, c, root);
            }
        }

        return result;
    }
}