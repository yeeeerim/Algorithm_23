function combi(arr, i) {
    let count = 0;
    if(i===1) { arr.map((item) => { count += item; }) }
    else {
        arr.forEach((fixed, index) => {
            const rest = arr.slice(index + 1);
            count += fixed * combi(rest, i-1);
        })
    }
    return count;
}

function solution(clothes) {
    var answer = 0;
    const hash = [];
    const arr = [];
    let countOfOne = 0;
    
    clothes.forEach(item => {
        if(hash[item[1]]) hash[item[1]].push(item[0]);
        else hash[item[1]] = [item[0]];
    })
    
    for(key of Object.keys(hash)) {
        const len = hash[key].length;
        if(len === 1) countOfOne += 1;
        arr.push(len);
    }
    
    // 모든 옷 종류가 하나씩 있을 때 예외처리
    if(countOfOne === clothes.length) return (2 ** countOfOne) - 1;
    
    for(let i = 1; i <= arr.length; i++) {
        answer += combi(arr, i);
    }
    return answer;
}