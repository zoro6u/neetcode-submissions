class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const n = nums.length;
    if (n === 0 || k === 0) return [];

    const result = [];
    const deque = []; // stores indices, values in decreasing order

    for (let i = 0; i < n; i++) {
      // Remove indices that are out of the current window
      while (deque.length > 0 && deque[0] <= i - k) {
        deque.shift();
      }

      // Remove indices whose values are smaller than the current value
      // (they can never be the max while nums[i] is still in the window)
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }

      deque.push(i);

      // Record the max once the first window is fully formed
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }

    return result;
  }
}

module.exports = Solution;