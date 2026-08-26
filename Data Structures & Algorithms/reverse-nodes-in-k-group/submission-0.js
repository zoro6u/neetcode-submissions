/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const hasKNodes = (node, k) => {
            let count = 0;
            while (node && count < k) {
                node = node.next;
                count++;
            }
            return count === k;
        };

        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (hasKNodes(groupPrev.next, k)) {
            let prev = null, curr = groupPrev.next;
            const groupStart = curr;

            for (let i = 0; i < k; i++) {
                const nxt = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nxt;
            }

            groupPrev.next = prev;
            groupStart.next = curr;
            groupPrev = groupStart;
        }

        return dummy.next;
    }
}