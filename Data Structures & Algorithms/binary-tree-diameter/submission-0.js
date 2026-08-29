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
    diameterOfBinaryTree(root) {
        if (root === null) return 0;

        let best = 0;
        const height = new Map();
        const visitedChildren = new Set();
        const stack = [root];

        while (stack.length > 0) {
            const node = stack[stack.length - 1];
            if (!visitedChildren.has(node)) {
                visitedChildren.add(node);
                if (node.left && !height.has(node.left)) stack.push(node.left);
                if (node.right && !height.has(node.right)) stack.push(node.right);
            } else {
                const leftH = node.left ? (height.get(node.left) || 0) : 0;
                const rightH = node.right ? (height.get(node.right) || 0) : 0;
                best = Math.max(best, leftH + rightH);
                height.set(node, 1 + Math.max(leftH, rightH));
                stack.pop();
            }
        }

        return best;
    }
}