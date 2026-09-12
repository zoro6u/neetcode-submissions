/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (root === null) return "#";

        const tokens = [];
        const queue = [root];
        while (queue.length > 0) {
            const node = queue.shift();
            if (node === null) {
                tokens.push("#");
            } else {
                tokens.push(String(node.val));
                queue.push(node.left);
                queue.push(node.right);
            }
        }

        return tokens.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const tokens = data.split(",");
        if (tokens[0] === "#") return null;

        const root = new TreeNode(parseInt(tokens[0], 10));
        const queue = [root];
        let i = 1;

        while (queue.length > 0) {
            const node = queue.shift();

            const leftVal = tokens[i++];
            if (leftVal !== "#") {
                node.left = new TreeNode(parseInt(leftVal, 10));
                queue.push(node.left);
            }

            const rightVal = tokens[i++];
            if (rightVal !== "#") {
                node.right = new TreeNode(parseInt(rightVal, 10));
                queue.push(node.right);
            }
        }

        return root;
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * var codec = new Codec()
 * codec.deserialize(codec.serialize(root));
 */