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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const stack = [[p, q]];
        while (stack.length > 0) {
            const [n1, n2] = stack.pop();
            if (n1 === null && n2 === null) continue;
            if (n1 === null || n2 === null || n1.val !== n2.val) return false;
            stack.push([n1.left, n2.left]);
            stack.push([n1.right, n2.right]);
        }
        return true;
    }
}