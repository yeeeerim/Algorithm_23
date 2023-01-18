function solution(t, p) {
  let answer = 0;

  const tLen = t.length;
  const pLen = p.length;

  for (let i = 0; i < tLen - pLen + 1; i++) {
    const target = t.substr(i, pLen);
    if (Number(target) <= Number(p)) answer++;
  }
  return answer;
}