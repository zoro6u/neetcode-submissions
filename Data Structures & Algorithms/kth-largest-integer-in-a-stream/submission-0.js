class MinHeap {
    constructor() { this.data = []; }
    size() { return this.data.length; }
    peek() { return this.data[0]; }
    push(val) {
        this.data.push(val);
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
    _bubbleUp(i) {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this.data[i] < this.data[parent]) {
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
            if (l < n && this.data[l] < this.data[smallest]) smallest = l;
            if (r < n && this.data[r] < this.data[smallest]) smallest = r;
            if (smallest === i) break;
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            i = smallest;
        }
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinHeap();
        for (const num of nums) {
            this.heap.push(num);
            if (this.heap.size() > k) this.heap.pop();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        if (this.heap.size() > this.k) this.heap.pop();
        return this.heap.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */