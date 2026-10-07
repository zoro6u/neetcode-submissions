class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.idx = -1;
        this.refs = 0;
    }

    /**
     * @param {string} word
     * @param {number} i
     * @return {void}
     */
    addWord(word, i) {
        let cur = this;
        cur.refs++;
        for (const c of word) {
            const index = c.charCodeAt(0) - "a".charCodeAt(0);
            if (cur.children[index] === null) {
                cur.children[index] = new TrieNode();
            }
            cur = cur.children[index];
            cur.refs++;
        }
        cur.idx = i;
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
        for (let i = 0; i < words.length; i++) {
            root.addWord(words[i], i);
        }

        const ROWS = board.length,
            COLS = board[0].length;
        const res = [];

        const dfs = (r, c, node) => {
            if (
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                board[r][c] === "*" ||
                node.children[this.getId(board[r][c])] === null
            ) {
                return 0;
            }

            let tmp = board[r][c];
            board[r][c] = "*";
            let prev = node;
            node = node.children[this.getId(tmp)];
            let found = 0;
            if (node.idx !== -1) {
                res.push(words[node.idx]);
                node.idx = -1;
                found++;
            }

            found += dfs(r + 1, c, node);
            found += dfs(r - 1, c, node);
            found += dfs(r, c + 1, node);
            found += dfs(r, c - 1, node);

            board[r][c] = tmp;
            node.refs -= found;
            if (node.refs === 0) {
                prev.children[this.getId(tmp)] = null;
            }
            return found;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                root.refs -= dfs(r, c, root);
            }
        }

        return Array.from(res);
    }

    /**
     * @param {string} c
     * @return {number}
     */
    getId(c) {
        return c.charCodeAt(0) - "a".charCodeAt(0);
    }
}
