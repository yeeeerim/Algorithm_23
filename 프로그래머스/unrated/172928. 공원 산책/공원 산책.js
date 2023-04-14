const LETTER = {
  S: 1,
  O: 1,
  X: 0,
};

function solution(park, routes) {
  let arr = [];
  let current = null;

  park.forEach((item, index) => {
    const temp = [];
    for (let c of item) {
      temp.push(LETTER[c]);
      if (c === "S") current = { r: index, c: temp.length - 1 };
    }
    arr.push(temp);
  });

  routes.forEach((item) => {
    const [direction, distance] = item.split(" ");
    try {
      current = move(arr, current, direction, Number(distance));
    } catch {}
  });

  return [current.r, current.c];
}

function move(arr, current, direction, distance) {
  let copy = Object.assign({}, current);
  switch (direction) {
    case "E":
      for (let i = 0; i < distance; i++) {
        if (!arr[copy.r][++copy.c]) return current;
      }
      break;
    case "S":
      for (let i = 0; i < distance; i++) {
        if (!arr[++copy.r][copy.c]) return current;
      }
      break;
    case "W":
      for (let i = 0; i < distance; i++) {
        if (!arr[copy.r][--copy.c]) return current;
      }
      break;
    case "N":
      for (let i = 0; i < distance; i++) {
        if (!arr[--copy.r][copy.c]) return current;
      }
      break;
  }
  return copy;
}
