/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const stack = [];
        let node = root;
        let count = 0;

        while (stack.length > 0 || node !== null) {
            while (node !== null) {
                stack.push(node);
                node = node.left;
            }
            node = stack.pop();
            count++;
            if (count === k) return node.val;
            node = node.right;
        }

        return -1;
    }
}