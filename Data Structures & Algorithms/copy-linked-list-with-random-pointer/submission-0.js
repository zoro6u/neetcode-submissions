/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        const oldToNew = new Map();

        let cur = head;
        while (cur) {
            oldToNew.set(cur, new Node(cur.val));
            cur = cur.next;
        }

        cur = head;
        while (cur) {
            const copy = oldToNew.get(cur);
            copy.next = cur.next ? oldToNew.get(cur.next) : null;
            copy.random = cur.random ? oldToNew.get(cur.random) : null;
            cur = cur.next;
        }

        return oldToNew.get(head);
    }
}