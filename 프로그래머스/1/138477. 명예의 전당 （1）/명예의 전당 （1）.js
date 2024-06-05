function solution(k, score) {
    const top = [], answer = [];
    for(let v of score) {
        top.push(v);
        top.sort((a,b) => a-b);
        if(top.length > k) top.shift(1);
        answer.push(top[0]);
    }
    return answer;
}