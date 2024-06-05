function solution(elements) {
    const arr = new Set();
    
    for(let i=1; i<=elements.length; i++) {
        for(let j=0; j<elements.length; j++) {
            let temp = null;
            temp = elements.slice(j, j+i);
            if(temp.length < i) temp.push(...elements.slice(0, i-temp.length));
            arr.add(temp.reduce((acc,cur) => acc+cur));
        }
    }

    return arr.size;
}