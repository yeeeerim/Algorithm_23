function solution(board) {
    var answer = 0;
    let arr = board.map(b => Array.from(b, (el) => { 
        if(el === '.') return '0';
        else return el;
    }));
    let visited = Array.from(Array(board.length), () => Array(board[0].length).fill(false));
    // 시작점, 끝점 찾기
    let startAt = null;
    let endAt = null;
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[0].length; j++) {
            if(arr[i][j] === 'R') {startAt = [i, j]; arr[i][j] = '0'}
            else if(arr[i][j] === 'G') endAt = [i, j];
            if(startAt && endAt) break;
        }
    }
    function isMovable(y,x) {
        if(y<0 || x<0 || y>=arr.length || x>=arr[0].length) return false;
        return arr[y][x] !== 'D';
    }
    
    function move(now, i) {
        let moveAtX = now[1];
        let moveAtY = now[0];
        if(i === 3) { // X 좌표 --
            while(isMovable(moveAtY, --moveAtX)) {
            }
            moveAtX++;
        } else if(i === 2) { // Y 좌표 ++
             while(isMovable(++moveAtY, moveAtX)) {
            }
            moveAtY--;
            
        } else if(i === 1) { // X 좌표 ++
             while(isMovable(moveAtY, ++moveAtX)) {
            }
            moveAtX--;
            
        } else { // Y 좌표 --
            while(isMovable(--moveAtY, moveAtX)) {}
            moveAtY++;
        }
        
        return [moveAtY, moveAtX]
    }
    
    let now;
    let queue = [startAt];
    let isEnd = false;
    visited[startAt[0]][startAt[1]] = true;
    
    while(queue.length > 0 && !isEnd) {
        now = queue.shift(1);
        
        for(let i=0; i<4; i++) {
            const newAt = move(now, i);
            if(visited[newAt[0]][newAt[1]]) continue; // 방문한 적 있음
            if(newAt[0] === endAt[0] && newAt[1] === endAt[1]){ 
                isEnd = true;
            }
            visited[newAt[0]][newAt[1]] = true;
            queue.push(newAt);
            arr[newAt[0]][newAt[1]] = String(Number(arr[now[0]][now[1]]) + 1);
        }
    }
    
    answer = arr[endAt[0]][endAt[1]];
    return isEnd ? Number(answer) : -1;
}