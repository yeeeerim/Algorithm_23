function solution(nums) {
    const set = new Set();
    for(let n of nums) {
        set.add(n);
    }
    return Math.min(set.size,nums.length/2)
}