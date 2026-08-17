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
     * @return {void} Do not return anything, modify head in-place instead.
     */
    reorderList(head) {
        if (!head || !head.next) return;

        let slow = head, fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;
        let prev = null;
        while (second) {
            const nxt = second.next;
            second.next = prev;
            prev = second;
            second = nxt;
        }
        second = prev;

        let first = head;
        while (second) {
            const firstNext = first.next;
            const secondNext = second.next;
            first.next = second;
            second.next = firstNext;
            first = firstNext;
            second = secondNext;
        }
    }
}