class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

        const m = nums1.length, n = nums2.length;
        const total = m + n;
        const half = Math.floor((total + 1) / 2);

        let lo = 0, hi = m;
        while (lo <= hi) {
            const i = Math.floor((lo + hi) / 2);
            const j = half - i;

            const left1 = i > 0 ? nums1[i - 1] : -Infinity;
            const right1 = i < m ? nums1[i] : Infinity;
            const left2 = j > 0 ? nums2[j - 1] : -Infinity;
            const right2 = j < n ? nums2[j] : Infinity;

            if (left1 <= right2 && left2 <= right1) {
                if (total % 2 === 1) return Math.max(left1, left2);
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else if (left1 > right2) {
                hi = i - 1;
            } else {
                lo = i + 1;
            }
        }
        throw new Error("Input arrays are not sorted or invalid");
    }
}