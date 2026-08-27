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
    maxDepth(root) {
        if (root === null) return 0;

        let depth = 0;
        let queue = [root];
        while (queue.length > 0) {
            depth++;
            const next = [];
            for (const node of queue) {
                if (node.left) next.push(node.left);
                if (node.right) next.push(node.right);
            }
            queue = next;
        }
        return depth;
    }
}