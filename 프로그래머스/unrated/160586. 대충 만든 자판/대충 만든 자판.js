function solution(keymap, targets) {
  var answer = [];

  for (const target of targets) {
    let count = 0;
    for (const c of target) {
      let leastIndex = 101;
      for (const key of keymap) {
        const index = key.indexOf(c) + 1;
        if (!index) continue;
        if (index < leastIndex) leastIndex = index;
      }
      if (leastIndex === 101) {
        count = -1;
        break;
      } else count += leastIndex;
    }
    answer.push(count);
  }

  return answer;
}