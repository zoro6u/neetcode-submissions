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
    maxPathSum(root) {
        let best = -Infinity;
        const gain = new Map();
        const visitedChildren = new Set();
        const stack = [root];

        const getGain = (node) => node === null ? 0 : gain.get(node);

        while (stack.length > 0) {
            const node = stack[stack.length - 1];
            if (!visitedChildren.has(node)) {
                visitedChildren.add(node);
                if (node.left && !gain.has(node.left)) stack.push(node.left);
                if (node.right && !gain.has(node.right)) stack.push(node.right);
            } else {
                const leftGain = Math.max(0, getGain(node.left));
                const rightGain = Math.max(0, getGain(node.right));
                best = Math.max(best, node.val + leftGain + rightGain);
                gain.set(node, node.val + Math.max(leftGain, rightGain));
                stack.pop();
            }
        }

        return best;
    }
}