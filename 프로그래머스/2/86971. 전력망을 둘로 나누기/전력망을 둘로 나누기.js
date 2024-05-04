function solution(n, wires) {
    let answer = n;
    let count = 0;
    let visit = Array(9).fill(false);
    const arr = Array.from({ length: n+1 }, ()=>[]);
    
    for(const [a, b] of wires) {
        arr[a].push(b);
        arr[b].push(a);
    }
    
    function dfs(a, b) {
        visit[a] = true;
        count++;

        for(let num of arr[a]) {
            if(!visit[num] && num !== b) {
                dfs(num, b)
            }
        }

        return count;
    }
    
    for(const [a, b] of wires) {
        count = 0;
        const treeA = dfs(a, b);
        count = 0;
        const treeB = dfs(b, a);
        visit.fill(false);
        answer = Math.min(Math.abs(treeA-treeB), answer);
    }
    
    return answer;
}