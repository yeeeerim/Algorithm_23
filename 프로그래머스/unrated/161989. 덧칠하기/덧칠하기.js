function solution(n, m, section) {
  const rest = section;
  let count = 0;

  while (rest.length !== 0) {
    count++;
    const startSection = rest.shift();
    const endSection = startSection + m - 1;
    let shiftCount = 0;

    for (const currentSection of rest) {
      if (currentSection <= endSection) shiftCount++;
      else break;
    }

    rest.splice(0, shiftCount);
  }

  return count;
}