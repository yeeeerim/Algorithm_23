function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    if(words.includes(begin)) return 1;
    
    const queue = [begin];
    let now = null;
    let hash = words.reduce((acc, w) => {
      return {...acc, [w]: 0};
    }, {});
    hash[begin] = 0;
    
    function isConnect(str, w) {
        let diff = 0;
        for(let i=0; i<w.length; i++) {
            if(str.charAt(i) !== w.charAt(i)) diff++;
            if(diff > 1) return false;
        }
        return true;
    }
    
    while(queue.length > 0) {
        now = queue.shift();
        for(let w of words) {
            if(hash[w] > 0) continue; // 방문한 적 있음
            if(isConnect(now, w)) {
                queue.push(w);
                hash[w] = hash[now] + 1;
            }
        }
    }
    
    return hash[target];
}