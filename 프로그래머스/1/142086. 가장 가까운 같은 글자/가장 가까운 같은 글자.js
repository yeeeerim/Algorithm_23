function solution(s) {
    const answer = [];
    const currentArr = [];
    
    s.split('').map((item, index) => {
        const lastIndex = currentArr.lastIndexOf(item);
        const idx = lastIndex === -1 ? -1 : -(lastIndex-index);
        currentArr.push(item);
        answer.push(idx);
    })
    
    return answer;
}