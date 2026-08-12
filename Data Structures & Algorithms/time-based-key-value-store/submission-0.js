class TimeMap {
    constructor() {
        // key -> array of [timestamp, value], timestamps strictly increasing per key
        this.store = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store.has(key)) this.store.set(key, []);
        this.store.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const entries = this.store.get(key);
        if (!entries || entries.length === 0) return "";

        let lo = 0, hi = entries.length - 1, result = "";
        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (entries[mid][0] <= timestamp) {
                result = entries[mid][1];
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return result;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */