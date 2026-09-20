class MaxHeap {
    constructor() { this.data = []; }
    size() { return this.data.length; }
    peek() { return this.data[0]; }
    push(val) { this.data.push(val); this._bubbleUp(this.data.length - 1); }
    pop() {
        const top = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0) { this.data[0] = last; this._bubbleDown(0); }
        return top;
    }
    _bubbleUp(i) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.data[i] > this.data[p]) { [this.data[i], this.data[p]] = [this.data[p], this.data[i]]; i = p; }
            else break;
        }
    }
    _bubbleDown(i) {
        const n = this.data.length;
        while (true) {
            let largest = i;
            const l = 2*i+1, r = 2*i+2;
            if (l < n && this.data[l] > this.data[largest]) largest = l;
            if (r < n && this.data[r] > this.data[largest]) largest = r;
            if (largest === i) break;
            [this.data[i], this.data[largest]] = [this.data[largest], this.data[i]];
            i = largest;
        }
    }
}

class MinHeap {
    constructor() { this.data = []; }
    size() { return this.data.length; }
    peek() { return this.data[0]; }
    push(val) { this.data.push(val); this._bubbleUp(this.data.length - 1); }
    pop() {
        const top = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0) { this.data[0] = last; this._bubbleDown(0); }
        return top;
    }
    _bubbleUp(i) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.data[i] < this.data[p]) { [this.data[i], this.data[p]] = [this.data[p], this.data[i]]; i = p; }
            else break;
        }
    }
    _bubbleDown(i) {
        const n = this.data.length;
        while (true) {
            let smallest = i;
            const l = 2*i+1, r = 2*i+2;
            if (l < n && this.data[l] < this.data[smallest]) smallest = l;
            if (r < n && this.data[r] < this.data[smallest]) smallest = r;
            if (smallest === i) break;
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            i = smallest;
        }
    }
}

class MedianFinder {
    constructor() {
        this.lower = new MaxHeap();
        this.upper = new MinHeap();
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.lower.push(num);
        this.upper.push(this.lower.pop());
        if (this.upper.size() > this.lower.size()) {
            this.lower.push(this.upper.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.lower.size() > this.upper.size()) {
            return this.lower.peek();
        }
        return (this.lower.peek() + this.upper.peek()) / 2;
    }
}