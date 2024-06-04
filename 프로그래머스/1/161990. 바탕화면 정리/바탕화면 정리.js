function solution(wallpaper) {
    let minX = wallpaper[0].length, minY = wallpaper.length+1, maxX = 0, maxY = 0;
    const arr = wallpaper.map(w=> Array.from(w));
    
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[0].length; j++) {
            if(arr[i][j] === '#') {
                minY = Math.min(i, minY);
                maxY = Math.max(i, maxY);
                minX = Math.min(j, minX);
                maxX = Math.max(j, maxX);
            }  
        }
    }
    
    return [minY, minX, maxY+1, maxX+1];
}