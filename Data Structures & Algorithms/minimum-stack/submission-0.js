class MinStack {
    constructor() {
        // each entry: [value, min of the whole stack up to and including this value]
        this.stack = [];
    }

    push(val) {
        const curMin = this.stack.length === 0
            ? val
            : Math.min(val, this.stack[this.stack.length - 1][1]);
        this.stack.push([val, curMin]);
    }

    pop() {
        this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1][0];
    }

    getMin() {
        return this.stack[this.stack.length - 1][1];
    }
}