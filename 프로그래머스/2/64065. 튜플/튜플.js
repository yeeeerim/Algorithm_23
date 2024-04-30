function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

function solution(s) {
    const result = [];
    const temp = s.slice(2, s.length - 2).split('},{').map(item => item.split(','));
    
    const sortedArr = sortByLength(temp);
    
    sortedArr.forEach(item => {
        item.forEach(c => {
             if(!result.includes(Number(c))) result.push(Number(c));
        })
    });
    
          
    return result;
}