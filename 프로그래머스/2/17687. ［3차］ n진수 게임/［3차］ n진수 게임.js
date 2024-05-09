function solution(n, t, m, p) {
    let answer = '';
    let result = '';
    
    for(let i=0; i<t*m+p; i++) {
        answer += i.toString(n).toUpperCase();
    }
    Array.from(answer).map((item, index) => {
        if(index % m === p-1) result+=item;
    })
    
    return result.substring(0, t);
}