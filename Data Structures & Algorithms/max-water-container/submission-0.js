class Solution {
    maxArea(heights) {
        let left = 0, right = heights.length - 1;
        let max = 0;

        while (left < right) {
            const height = Math.min(heights[left], heights[right]);
            const width = right - left;
            max = Math.max(max, height * width);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
}