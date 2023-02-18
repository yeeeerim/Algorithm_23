function solution(s, skip, index) {
  var answer = "";
  let all = "abcdefghijklmnopqrstuvwxyz";

  for (let item of skip) {
    all = all.replace(item, "");
  }

  let len = all.length;
  let move = index > len ? index - len : index;
  for (let item of s) {
    const i = all.indexOf(item);
    let itemIndex = i + move;
    if (itemIndex >= len) itemIndex -= len;
    answer += all.charAt(itemIndex);
  }
  return answer;
}