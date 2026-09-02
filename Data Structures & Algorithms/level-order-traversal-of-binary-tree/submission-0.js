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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) return [];

        const result = [];
        let queue = [root];

        while (queue.length > 0) {
            const levelVals = [];
            const next = [];
            for (const node of queue) {
                levelVals.push(node.val);
                if (node.left) next.push(node.left);
                if (node.right) next.push(node.right);
            }
            result.push(levelVals);
            queue = next;
        }

        return result;
    }
}