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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const isSame = (n1, n2) => {
            const stack = [[n1, n2]];
            while (stack.length > 0) {
                const [a, b] = stack.pop();
                if (a === null && b === null) continue;
                if (a === null || b === null || a.val !== b.val) return false;
                stack.push([a.left, b.left]);
                stack.push([a.right, b.right]);
            }
            return true;
        };

        if (subRoot === null) return true;

        const stack = [root];
        while (stack.length > 0) {
            const node = stack.pop();
            if (node === null) continue;
            if (isSame(node, subRoot)) return true;
            stack.push(node.left);
            stack.push(node.right);
        }

        return false;
    }
}