function solution(word) {
    const arr = ["","A","E","I","O","U"];
    const result = [];

    function recurtion (n,str){
        if(n === 0){
            result.push(str);
            return;
        }
        for(let i = 0 ; i < 6 ; i++) {
            recurtion(n-1,`${str}${arr[i]}`);
        }
    }
    recurtion(5,"");
    return [...new Set(result)].sort().indexOf(word)
}