class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
            node = node.children.get(ch);
        }
        node.isEnd = true;
    }

    walk(text) {
        let node = this.root;
        for (const ch of text) {
            node = node.children.get(ch);
            if (node === undefined) return null;
        }
        return node;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const node = this.walk(word);
        return node !== null && node.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.walk(prefix) !== null;
    }
}

/**
 * Your PrefixTree object will be instantiated and called as such:
 * var obj = new PrefixTree()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */