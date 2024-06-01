function solution(clothes) {
    var answer = 0;
    const hash = [];
    const arr = [];
    
    clothes.forEach(item => {
        if(hash[item[1]]) hash[item[1]].push(item[0]);
        else hash[item[1]] = [item[0]];
    })
    
    for(key of Object.keys(hash)) {
        const len = hash[key].length;
        arr.push(len+1);
    }
    
    return arr.reduce((a,b) => a*b) - 1;
}