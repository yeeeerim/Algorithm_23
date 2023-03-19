function solution(cards1, cards2, goal) {
  while (goal.length !== 0) {
    const goalPop = goal.shift();
    const cards1Pop = cards1.shift();

    if (goalPop === cards1Pop) continue;
    cards1.unshift(cards1Pop);

    const cards2Pop = cards2.shift();

    if (goalPop !== cards2Pop) return "No";
  }

  return "Yes";
}