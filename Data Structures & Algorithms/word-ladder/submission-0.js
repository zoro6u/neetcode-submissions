class Solution {
    ladderLength(beginWord, endWord, wordList) {
        const words = new Set(wordList);
        if (!words.has(endWord)) return 0;
        const L = beginWord.length;
        const buckets = new Map();
        for (const w of words) {
            for (let i = 0; i < L; i++) {
                const key = w.slice(0, i) + '*' + w.slice(i + 1);
                if (!buckets.has(key)) buckets.set(key, []);
                buckets.get(key).push(w);
            }
        }
        const queue = [[beginWord, 1]];
        const seen = new Set([beginWord]);
        for (let h = 0; h < queue.length; h++) {
            const [w, d] = queue[h];
            if (w === endWord) return d;
            for (let i = 0; i < L; i++) {
                const key = w.slice(0, i) + '*' + w.slice(i + 1);
                const list = buckets.get(key);
                if (!list) continue;
                buckets.delete(key);
                for (const nxt of list) {
                    if (!seen.has(nxt)) {
                        seen.add(nxt);
                        queue.push([nxt, d + 1]);
                    }
                }
            }
        }
        return 0;
    }
}
var ladderLength = function(beginWord, endWord, wordList) { return new Solution().ladderLength(beginWord, endWord, wordList); };