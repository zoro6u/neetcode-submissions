class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (!s || !t || t.length > s.length) return "";

    const need = new Map();
    for (const ch of t) {
      need.set(ch, (need.get(ch) || 0) + 1);
    }

    let missing = t.length; // total characters still needed (counting duplicates)
    let bestLen = Infinity;
    let bestStart = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      const ch = s[right];
      if (need.has(ch)) {
        if (need.get(ch) > 0) {
          missing--;
        }
        need.set(ch, need.get(ch) - 1);
      }

      // When window is valid, shrink from the left
      while (missing === 0) {
        if (right - left + 1 < bestLen) {
          bestLen = right - left + 1;
          bestStart = left;
        }

        const leftCh = s[left];
        if (need.has(leftCh)) {
          need.set(leftCh, need.get(leftCh) + 1);
          if (need.get(leftCh) > 0) {
            missing++;
          }
        }
        left++;
      }
    }

    return bestLen === Infinity ? "" : s.substring(bestStart, bestStart + bestLen);
  }
}

module.exports = Solution;