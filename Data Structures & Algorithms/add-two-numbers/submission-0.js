/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class Solution {
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let current = dummy;
        let carry = 0;

        while (l1 || l2 || carry) {
            const val1 = l1 ? l1.val : 0;
            const val2 = l2 ? l2.val : 0;

            const total = val1 + val2 + carry;
            carry = Math.floor(total / 10);
            current.next = new ListNode(total % 10);
            current = current.next;

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return dummy.next;
    }
}