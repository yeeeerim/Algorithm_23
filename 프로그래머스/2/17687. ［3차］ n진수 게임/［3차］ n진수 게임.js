function solution(n, t, m, p) {
    let answer = '';
    const arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    
    function convert(i) {
        let copy_i = i;
        let result = '';
        
        while(Math.floor(copy_i/n) > 0) {
            const num = copy_i % n;
            copy_i = Math.floor(copy_i/n);
            result = arr[num] + result;
        }
        result = arr[copy_i] + result;
        
        return result;
    }
    
    for(let i=0; i<t*m+p; i++) {
        answer += convert(i);
    }
    
    let result = '';
    Array.from(answer).map((item, index) => {
        if(index % m === p-1) result+=item;
    })
    
    return result.substring(0, t);
}