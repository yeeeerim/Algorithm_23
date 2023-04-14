function solution(name, yearning, photos) {
  const answer = [];
  let arr = {};

  for (let i = 0; i < name.length; i++) {
    arr[name[i]] = yearning[i];
  }

  photos.forEach((photo) => {
    let sum = 0;
    photo.forEach((person) => {
      const point = arr[person];
      if (point) sum += arr[person];
    });
    answer.push(sum);
  });

  return answer;
}