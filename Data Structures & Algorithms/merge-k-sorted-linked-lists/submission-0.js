class MinHeap {
    constructor() { this.data = []; }
    size() { return this.data.length; }
    push(item) { // item: [val, index, node]
        this.data.push(item);
        this._bubbleUp(this.data.length - 1);
    }
    pop() {
        const top = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = last;
            this._bubbleDown(0);
        }
        return top;
    }
    _less(a, b) {
        if (a[0] !== b[0]) return a[0] < b[0];
        return a[1] < b[1];
    }
    _bubbleUp(i) {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this._less(this.data[i], this.data[parent])) {
                [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
                i = parent;
            } else break;
        }
    }
    _bubbleDown(i) {
        const n = this.data.length;
        while (true) {
            let smallest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && this._less(this.data[l], this.data[smallest])) smallest = l;
            if (r < n && this._less(this.data[r], this.data[smallest])) smallest = r;
            if (smallest === i) break;
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            i = smallest;
        }
    }
}

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const heap = new MinHeap();
        for (let i = 0; i < lists.length; i++) {
            if (lists[i]) heap.push([lists[i].val, i, lists[i]]);
        }

        const dummy = new ListNode();
        let tail = dummy;

        while (heap.size() > 0) {
            const [val, i, node] = heap.pop();
            tail.next = node;
            tail = tail.next;
            if (node.next) heap.push([node.next.val, i, node.next]);
        }

        return dummy.next;
    }
}