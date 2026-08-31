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
     * @return {boolean}
     */
    isBalanced(root) {
        if (root === null) return true;

        const height = new Map();
        const visitedChildren = new Set();
        const stack = [root];
        let balanced = true;

        while (stack.length > 0) {
            const node = stack[stack.length - 1];
            if (!visitedChildren.has(node)) {
                visitedChildren.add(node);
                if (node.left && !height.has(node.left)) stack.push(node.left);
                if (node.right && !height.has(node.right)) stack.push(node.right);
            } else {
                const leftH = node.left ? (height.get(node.left) || 0) : 0;
                const rightH = node.right ? (height.get(node.right) || 0) : 0;
                if (leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1) {
                    height.set(node, -1);
                    balanced = false;
                } else {
                    height.set(node, 1 + Math.max(leftH, rightH));
                }
                stack.pop();
            }
        }

        return balanced;
    }
}