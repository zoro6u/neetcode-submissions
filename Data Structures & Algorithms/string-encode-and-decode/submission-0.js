class Solution {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let encoded = "";
        for (const s of strs) {
            encoded += `${s.length}#${s}`;
        }
        return encoded;
    }

    /**
     * Decodes a single string to a list of strings.
     * @param {string} s
     * @return {string[]}
     */
    decode(s) {
        const result = [];
        let i = 0;
        const n = s.length;

        while (i < n) {
            // read digits until '#' to get the length
            let j = i;
            while (s[j] !== '#') j++;
            const length = parseInt(s.slice(i, j), 10);

            // move past the '#', then read exactly `length` chars
            const start = j + 1;
            result.push(s.slice(start, start + length));
            i = start + length;
        }

        return result;
    }
}

module.exports = Solution;