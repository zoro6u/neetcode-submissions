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
     * @return {number[]}
     */
    rightSideView(root) {
        if (root === null) return [];

        const result = [];
        let queue = [root];

        while (queue.length > 0) {
            const next = [];
            for (let i = 0; i < queue.length; i++) {
                const node = queue[i];
                if (i === queue.length - 1) {
                    result.push(node.val);
                }
                if (node.left) next.push(node.left);
                if (node.right) next.push(node.right);
            }
            queue = next;
        }

        return result;
    }
}