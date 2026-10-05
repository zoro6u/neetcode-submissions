class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
            node = node.children.get(ch);
        }
        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const stack = [[this.root, 0]];
        const n = word.length;
        while (stack.length > 0) {
            const [node, i] = stack.pop();
            if (i === n) {
                if (node.isEnd) return true;
                continue;
            }
            const ch = word[i];
            if (ch === '.') {
                for (const child of node.children.values()) {
                    stack.push([child, i + 1]);
                }
            } else if (node.children.has(ch)) {
                stack.push([node.children.get(ch), i + 1]);
            }
        }
        return false;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */