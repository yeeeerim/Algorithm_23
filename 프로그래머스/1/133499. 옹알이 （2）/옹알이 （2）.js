function solution(babbling) {
    var answer = 0;
    const arr = ['aya','ye','woo','ma'];
    
    for(let v of babbling) {
        for(let i=0; i<arr.length; i++) {
            v = v.replaceAll(arr[i],i);
        }
        if(isNaN(Number(v))) continue;
        let bef = v.charAt(0);
        let isRepeat = false;
        for(let i=1; i<v.length; i++) {
            if(v.charAt(i) === bef) isRepeat = true;
            bef = v.charAt(i);
        }
        if(!isRepeat) answer++;
    }
    
    return answer;
}