function solution(operations) {
    var answer = [];
    
    for(let o of operations) {
        const arr = o.split(' ');
        if(arr[0] === 'I') answer.push(Number(arr[1]));
        else {
            if(answer.length > 0) {
                answer.sort((a,b) => a-b);
                if(arr[1]==='1') {
                    answer.pop();
                } else {
                    answer.shift();
                }
            }
        }
    }
    answer.sort((a,b) => a-b);
    if(answer.length === 0) return [0,0];
    return [answer.slice(-1)[0], answer[0]];
}