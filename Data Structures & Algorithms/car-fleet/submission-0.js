class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => [p, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);          // closest to destination first

        const stack = [];                          // arrival times, strictly increasing
        for (const [p, s] of cars) {
            const time = (target - p) / s;
            // only push if this car is slower than the fleet ahead; otherwise it merges
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }
        return stack.length;                       // one entry per surviving fleet
    }
}