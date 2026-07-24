class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0, right = height.length - 1;
        let leftMax = 0, rightMax = 0;
        let total = 0;

        while (left < right) {
            if (height[left] < height[right]) {

                leftMax = Math.max(leftMax, height[left]);
                total += leftMax - height[left];
                left++;
            } else {

                rightMax = Math.max(rightMax, height[right]);
                total += rightMax - height[right];
                right--;
            }
        }

        return total;
    }
}