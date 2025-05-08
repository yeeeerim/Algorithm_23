function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);
    
    for(let i=0; i<n; i++) {
        if(visited[i]) continue;
        answer += 1;
        dfs(computers, i, visited);
    }

    
  
    return answer;
}

function dfs(graph, node, visited) {
	visited[node] = true;
	
    for(let i=0; i<graph[node].length; i++) {
        if(graph[node][i] && !visited[i]) dfs(graph, i, visited);
    }
}