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
     * @return {number}
     */
    goodNodes(root) {
        if (root === null) return 0;

        let count = 0;
        const stack = [[root, -Infinity]];

        while (stack.length > 0) {
            const [node, maxSoFar] = stack.pop();
            if (node.val >= maxSoFar) count++;
            const newMax = Math.max(maxSoFar, node.val);
            if (node.left) stack.push([node.left, newMax]);
            if (node.right) stack.push([node.right, newMax]);
        }

        return count;
    }
}