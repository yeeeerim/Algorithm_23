function hanoi(n, from, through, to) {
    if(n === 1) return [[from, to]];
    let result = [];
    result = result.concat(hanoi(n-1, from, to, through));
    result.push([from, to]);
    result = result.concat(hanoi(n-1, through, from, to));
    return result;
}

function solution(n) {
    return hanoi(n, 1, 2, 3);
}