class Solution {
    isPalindrome(s) {
        let left = 0, right = s.length - 1;
        const isAlnum = (ch) => /[a-zA-Z0-9]/.test(ch);

        while (left < right) {
            while (left < right && !isAlnum(s[left])) left++;
            while (left < right && !isAlnum(s[right])) right--;

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}