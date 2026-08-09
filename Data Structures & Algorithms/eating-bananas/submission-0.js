class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const hoursNeeded = (k) => {
            let hours = 0;
            for (const p of piles) hours += Math.ceil(p / k);
            return hours;
        };

        let lo = 1, hi = Math.max(...piles);
        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (hoursNeeded(mid) <= h) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }
}