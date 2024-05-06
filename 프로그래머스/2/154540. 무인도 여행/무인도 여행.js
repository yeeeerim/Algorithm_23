function solution(arr) {
    const answer = [];
    const maps = Array.from(arr, m => Array.from(m));
    let visit = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false));
    const offset = [[0,1],[1,0],[0,-1],[-1,0]];
    
    function isMovable(pos) {
        if(pos[0] < 0 || pos[1] < 0 || pos[0] >= maps.length || pos[1] >= maps[0].length) return false;
        return !visit[pos[0]][pos[1]] && maps[pos[0]][pos[1]] !== 'X';
    }
    
    for(let i=0; i<maps.length; i++) {
        for(let j=0; j<maps[i].length; j++) {
            if(!isMovable([i,j])) continue;
            const queue = [];
            let count = 0;
            queue.push([i,j]);
            while(queue.length > 0) {
                let now = queue.shift();
                count += Number(maps[now[0]][now[1]]);
                visit[now[0]][now[1]] = true;
                // 이동
                for(const o of offset) {
                    const pos = [now[0]+o[0], now[1]+o[1]];
                    if(isMovable(pos)) {
                        queue.push(pos);
                        visit[pos[0]][pos[1]] = true;
                    }
                }
            }
            answer.push(count);
        }
    }
    
    if(answer.length === 0) return [-1];
    return answer.sort((a,b) => a-b);
}